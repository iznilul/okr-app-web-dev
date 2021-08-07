<template>
  <div id="login">
    <div id="title">
      <transition appear name="fade">
        <span>SDUT SOFTLAB/ITLAB管理系统</span>
      </transition>
    </div>

    <div class="news" @mouseenter="mouseChange" @mouseleave="mouseChange">
      <transition appear name="fade">
        <Card title="实时热门技术博客">
          <Tabs class="tabs" type="card" :value="currentTab">
            <TabPane label="CSDN" name="tab0">https://www.csdn.net/</TabPane>
            <TabPane label="掘金" name="tab1">https://juejin.cn/?sort=three_days_hottest</TabPane>
            <TabPane label="博客园" name="tab2">https://www.cnblogs.com/pick/</TabPane>
            <TabPane label="思否" name="tab3">https://segmentfault.com/blogs</TabPane>
          </Tabs>
        </Card>
      </transition>
    </div>
    <div class="login-con">
      <transition appear name="fade">
        <Card icon="log-in" title="暂时不欢迎登录 (OvO)开发中">
          <div class="form-con">
            <Form ref="form" :model="form" :rules="rules">
              <FormItem prop="username">
                <Input prefix="ios-contact" v-model="form.username" placeholder="用户名" clearable />
              </FormItem>
              <FormItem prop="password">
                <Input
                  type="password"
                  v-model="form.password"
                  prefix="md-lock"
                  placeholder="密码"
                  clearable
                  @keyup.enter.native="verify('form')"
                />
              </FormItem>
            </Form>
            <div class="button">
              <Button :loading="isShowLoading" class="submit" type="primary" @click="verify('form')">登陆</Button>
            </div>
          </div>
        </Card>
      </transition>
    </div>
    <div class="verify">
      <Verification ref="verification"> </Verification>
    </div>
  </div>
</template>

<script>
import Verification from '../components/util/Verification'
import particles from 'particles.js'
import config from '../config/particlesConfig'
export default {
  name: 'login',
  components: { Verification },
  data() {
    return {
      usernameError: '',
      pwdError: '',
      isShowLoading: false,
      form: {
        // 一般把请求参数封装到form里
        username: '',
        password: '',
      },
      currentTab: 'tab1',
      tabNum: 0,
      mouse: false,
      timer: '',
      rules: {
        //判空规则
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  watch: {
    $route: {
      // route变化回调参数
      handler(route) {
        console.log(route)
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.mouse === false) {
        this.currentTab = 'tab' + (this.tabNum++ % 4)
      }
      // console.log(this.currentTab)
    }, 3000)
    particlesJS('login', config)
  },

  beforeDestroy() {
    clearInterval(this.timer)
  },

  methods: {
    mouseChange() {
      this.mouse = !this.mouse
    },

    verify(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$refs.verification.show()
        } else {
          this.$Message.error('用户名或密码格式不符，请重新输入')
        }
      })
    },

    submit() {
      this.$store
        .dispatch('Login', this.form) // 表单会在序列化时转换成json格式
        .then((res) => {
          // console.log(res.data)
          const data = res.data
          localStorage.setItem('token', data.token)
          localStorage.setItem('username', data.username)
          this.loginSuccess()
        })
        .catch((error) => {
          this.requestFailed()
          console.error(error)
        })
      this.handlemodifyReset('form')
    },

    loginSuccess() {
      // console.log()
      this.$router.push({ path: this.redirect || '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$Notice.success({
          title: '登录成功，欢迎回来',
        })
      }, 1000)
    },

    requestFailed() {
      this.$Notice.error({
        title: '登录失败',
        desc: '请检查用户名密码或者网络连接',
      })
    },

    handlemodifyReset(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
@import '../style/views/Login';
@import '../style/animation/Fade';
</style>
