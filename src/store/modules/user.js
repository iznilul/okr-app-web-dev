import Vue from 'vue'

import {
  login,
  register,
  getUserInfoByCond,
  getUserInfoByUsername,
  modifyUserInfo,
  modifyPassword,
  removeByUsername,
  reloadAdminRoleResource,
  reloadUserRoleResource,
} from '@/api/user'
import md5 from 'js-md5'

const user = {
  state: {
    token: '',
    role: '',
    username: '',
    name: '',
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
    SET_USERNAME: (state, name) => {
      state.name = name
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
      state.username = param.username
      state.name = param.name
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
      // userInfo.password = md5(userInfo.password)
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

    //新用户注册
    Register({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        console.log('userInfo', userInfo)
        register(userInfo)
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
    saveSession({ commit }, data) {
      sessionStorage.setItem('username', data.username)
      sessionStorage.setItem('name', data.name)
      sessionStorage.setItem('avatar', data.avatar)
      sessionStorage.setItem('major', data.major)
      sessionStorage.setItem('qq', data.qq)
      sessionStorage.setItem('phone', data.phone)
      sessionStorage.setItem('weixin', data.weixin)
      sessionStorage.setItem('desc', data.desc)
    },

    //更新用户资料
    modifyUserInfo({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        modifyUserInfo(userInfo)
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

    //根据用户名获取用户
    getUserInfoByUsername({ commit }, username) {
      return new Promise((resolve, reject) => {
        getUserInfoByUsername(username)
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

    //根据条件获取用户
    getUserInfoByCond({ commit }, cond) {
      return new Promise((resolve, reject) => {
        getUserInfoByCond(cond)
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

    //根据用户名删除用户
    removeByUsername({ commit }, username) {
      return new Promise((resolve, reject) => {
        removeByUsername(username)
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
    //重载管理员资源
    reloadAdminRoleResource({ commit }, {}) {
      return new Promise((resolve, reject) => {
        reloadAdminRoleResource({})
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
    //重载用户资源
    reloadUserRoleResource({ commit }, {}) {
      return new Promise((resolve, reject) => {
        reloadUserRoleResource({})
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
    modifyPassword({ commit }, modifyInfo) {
      modifyInfo.oldPassword = md5(modifyInfo.oldPassword)
      modifyInfo.newPassword = md5(modifyInfo.newPassword)
      return new Promise((resolve, reject) => {
        modifyPassword(modifyInfo)
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
    updateSession({ commit }, data) {
      sessionStorage.setItem('name', data.name)
      sessionStorage.setItem('major', data.major)
      sessionStorage.setItem('qq', data.qq)
      sessionStorage.setItem('phone', data.phone)
      sessionStorage.setItem('weixin', data.weixin)
      sessionStorage.setItem('desc', data.desc)
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
