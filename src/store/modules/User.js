import { userInfoByCond, getUserInfo, modifyUserInfo, modifyPassword, getUserInfoByUsername } from '@/api/User'
import md5 from 'js-md5'

const user = {
  state: {
    username: '',
    name: '',
    avatar: '',
    major: '',
    qq: '',
    phone: '',
    weixin: '',
    research: '',
  },

  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username
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
    SET_RESEARCH: (state, research) => {
      state.research = research
    },
    SET_USER: (state, param) => {
      // console.log(param)
      state.name = param.name
      state.major = param.major
      state.qq = param.qq
      state.phone = param.phone
      state.weixin = param.weixin
      state.research = param.research
    },
  },

  actions: {
    //保存到session
    saveSession({ commit }, data) {
      // console.log('data:', data)
      commit('SET_USERNAME', data.username)
      commit('SET_AVATAR', data.avatar)
      commit('SET_USER', data)
    },

    //更新用户资料
    modifyUserInfo({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        modifyUserInfo(userInfo)
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },

    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
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
    getUserInfoByUsername({ commit }, param) {
      return new Promise((resolve, reject) => {
        getUserInfoByUsername(param)
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
    userInfoByCond({ commit }, cond) {
      return new Promise((resolve, reject) => {
        userInfoByCond(cond)
          .then((response) => {
            // const result = response
            // console.log(result)
            resolve(response)
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
  },
}

export default user
