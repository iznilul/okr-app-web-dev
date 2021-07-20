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
import { getUserInfoByUsername } from '../api/user'
export default {
  name: 'home',
  data() {
    return {
      userInfo: '',
      form: {
        username: sessionStorage.getItem('username'),
      },
    }
  },
  mounted() {
    // this.getUserData()
  },
  methods: {
    getUserData() {
      this.$store
        .dispatch('getUserInfoByUsername', { username: localStorage.getItem('username') })
        .then((res) => {
          this.$store.dispatch('saveSession', res)
          this.getUserInfoSuccess()
        })
        .catch((error) => {
          this.getUserInfoFailed()
          console.error(error)
        })
    },

    getUserInfoSuccess() {
      this.$Notice.error({
        title: '获取用户信息成功',
      })
    },

    getUserInfoFailed() {
      this.$Notice.error({
        title: '获取用户信息失败',
        desc: '请检查用户名密码或者网络连接',
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
