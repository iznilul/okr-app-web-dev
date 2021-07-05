import Vue from 'vue'

import { login, selectUser, updateUser, verifyPassword } from '@/api/user'

const user = {
  state: {
    token: '',
    role: '',
    account: '',
    userName: '',
    avatar: '',
    major: '',
    qq: '',
    phone: '',
    weixin: '',
    desc: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MAJOR: (state, major) => {
      state.major = major
    },
    SET_QQ: (state, qq) => {
      state.qq = qq
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    },
    SET_WEIXIN: (state, weixin) => {
      state.weixin = weixin
    },
    SET_DESC: (state, desc) => {
      state.desc = desc
    },
    SET_USER: (state, param) => {
      console.log(param)
      state.role = param.role
      state.account = param.account
      state.userName = param.userName
      state.avatar = param.avatar
      state.major = param.major
      state.qq = param.qq
      state.phone = param.phone
      state.weixin = param.weixin
      state.desc = param.desc
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        console.log('userInfo', userInfo)
        login(userInfo)
          .then((response) => {
            const result = response
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    //保存到session
    saveSession({ commit }, res) {
      sessionStorage.setItem('account', res.account)
      sessionStorage.setItem('userName', res.userName)
      sessionStorage.setItem('role', res.role)
      sessionStorage.setItem('avatar', res.avatar)
      sessionStorage.setItem('major', res.major)
      sessionStorage.setItem('qq', res.qq)
      sessionStorage.setItem('phone', res.phone)
      sessionStorage.setItem('weixin', res.weixin)
      sessionStorage.setItem('desc', res.desc)
    },

    //更新用户资料
    updateUser({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        updateUser(userInfo)
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result.data)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },

    //修改密码
    verifyPassword({ commit }, verifyInfo) {
      return new Promise((resolve, reject) => {
        verifyPassword(verifyInfo)
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result.data)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },

    //更新session
    updateSession({ commit }, res) {
      sessionStorage.setItem('userName', res.userName)
      sessionStorage.setItem('major', res.major)
      sessionStorage.setItem('qq', res.qq)
      sessionStorage.setItem('phone', res.phone)
      sessionStorage.setItem('weixin', res.weixin)
      sessionStorage.setItem('desc', res.desc)
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    },
  },
}

export default user
