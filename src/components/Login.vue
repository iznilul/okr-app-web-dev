<template>
  <div class="login-vue" :style="bg">
    <div class="container">
      <p class="title">WELCOME</p>
      <!--            <form-->
      <!--                method="POST"-->
      <!--                @submit.prevent="submit"-->
      <!--            >-->
      <div class="input-c">
        <Input prefix="ios-contact" v-model="form.account" placeholder="用户名" clearable @on-blur="verifyAccount" />
        <p class="error">{{ accountError }}</p>
      </div>
      <div class="input-c">
        <Input
          type="password"
          v-model="form.password"
          prefix="md-lock"
          placeholder="密码"
          clearable
          @on-blur="verifyPwd"
          @keyup.enter.native="submit"
        />
        <p class="error">{{ pwdError }}</p>
      </div>
      <!--                <Button :loading="isShowLoading" class="submit" type="primary">登陆</Button>-->
      <!--            </form>-->
      <!--            <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登陆</Button>-->
      <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登陆</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      accountError: '',
      pwdError: '',
      isShowLoading: false,
      bg: {},
      form: {
        //一般把请求参数封装到form里
        account: '',
        password: ''
      }
    }
  },
  created() {
    this.bg.backgroundImage = 'url(' + require('../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
  },
  watch: {
    $route: {
      //route变化回调参数
      handler(route) {
        console.log(route)
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    verifyAccount() {
      if (this.form.account === '') {
        this.accountError = '用户名不能为空'
      } else {
        this.accountError = ''
      }
    },
    verifyPwd() {
      if (this.form.password === '') {
        this.pwdError = '密码不能为空'
      } else {
        this.pwdError = ''
      }
    },
    submit() {
      this.$store
        .dispatch('Login', this.form) //表单会在序列化时转换成json格式
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
            localStorage.setItem('userName', '小明')
            // 登陆成功 假设这里是后台返回的 token
            localStorage.setItem('token', 'i_am_token')
            this.loginSuccess()
          } else {
            this.$Message.error({
              content: res.msg
            })
            this.loginFailed()
          }
        })
        .catch(error => {
          this.requestFailed()
          console.error(error)
        })
    },
    loginSuccess() {
      // console.log()
      this.$router.push({ path: this.redirect || '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$Notice.success({
          title: '登录成功，欢迎回来',
          desc: 'hello'
        })
      }, 1000)
    },
    loginFailed() {
      this.$Notice.error({
        title: '登录失败',
        desc: '请检查用户名和密码'
      })
    },
    requestFailed() {
      this.$Notice.error({
        title: '网络错误',
        desc: '请检查网络连接'
      })
    }
  }
}
</script>

<style>
.login-vue {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.login-vue .container {
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
}
.login-vue .ivu-input {
  background-color: transparent;
  color: #fff;
  outline: #fff;
  border-color: #fff;
}
.login-vue ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.8);
}
.login-vue .title {
  font-size: 16px;
  margin-bottom: 20px;
}
.login-vue .input-c {
  margin: auto;
  width: 200px;
}
.login-vue .error {
  color: red;
  text-align: left;
  margin: 5px auto;
  font-size: 12px;
  padding-left: 30px;
  height: 20px;
}
.login-vue .submit {
  width: 200px;
}
.login-vue .account {
  margin-top: 30px;
}
.login-vue .account span {
  cursor: pointer;
}
.login-vue .ivu-icon {
  color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
  color: #777;
}
</style>
