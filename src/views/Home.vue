<template>
  <div style="position: absolute; left: 50px; top: 60px">
    <Button @click="getUserData">ajax测试</Button>
  </div>
</template>

<script>
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
      this.$Notice.success({
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
  background-color: rgba(0, 0, 0, 0);
}
.home-content {
  padding: 10px;
  border-radius: 5px;
  background: #fff;
}
</style>
