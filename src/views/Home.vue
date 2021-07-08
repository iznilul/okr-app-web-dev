<template>
  <div class="home-container">
    <div class="home-content">
      <Button @click="getUserData">ajax测试</Button>

      <Input :rows="30" style="margin-top: 20px" v-model="userInfo" type="textarea" />
    </div>
  </div>
</template>

<script>
import { fetchUserData } from '@/api/index'
import api from '../api/index'
import { selectUser } from '../api/user'
export default {
  name: 'home',
  data() {
    return {
      userInfo: '',
      form: {
        account: sessionStorage.getItem('account'),
      },
    }
  },
  methods: {
    getUserData() {
      selectUser(this.form)
        .then((res) => {
          this.userInfo = res.data
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.home-container {
  padding: 10px;
  padding-top: 5px;
}
.home-content {
  padding: 10px;
  border-radius: 5px;
  background: #fff;
}
</style>
