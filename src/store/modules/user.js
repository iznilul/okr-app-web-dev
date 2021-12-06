import { changePassword, changeUser, changeUserRole, queryUser, queryUserByUsername, queryUserList } from '@/api/user'
import md5 from 'js-md5'
import { addUser, cancelUser } from '@/api/user'

const user = {
  state: {
    userId: '',
    username: '',
    name: '',
    role: '',
    avatar: '',
    major: '',
    qq: '',
    phone: '',
    weixin: '',
    profile: '',
  },

  mutations: {
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLE: (state, role) => {
      state.role = role
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
    SET_PROFILE: (state, profile) => {
      state.profile = profile
    },
    SET_USER: (state, param) => {
      // console.log(param)
      state.name = param.name
      state.major = param.major
      state.qq = param.qq
      state.phone = param.phone
      state.weixin = param.weixin
      state.profile = param.profile
    },
  },

  actions: {
    //保存到session
    saveSession({ commit }, data) {
      // console.log('data:', data)
      commit('SET_USERID', data.userId)
      commit('SET_USERNAME', data.username)
      commit('SET_AVATAR', data.avatar)
      commit('SET_ROLE', data.role)
      commit('SET_USER', data)
    },

    modifyUser({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        changeUser(userInfo)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    modifyUserRole({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        changeUserRole(userInfo)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getUser({ commit }) {
      return new Promise((resolve, reject) => {
        queryUser()
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    //根据用户名获取用户
    getUserByUsername({ commit }, param) {
      return new Promise((resolve, reject) => {
        queryUserByUsername(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    //根据条件获取用户
    getUserList({ commit }, cond) {
      return new Promise((resolve, reject) => {
        queryUserList(cond)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    //修改密码
    modifyPassword({ commit }, modifyInfo) {
      modifyInfo.oldPassword = md5(modifyInfo.oldPassword)
      modifyInfo.newPassword = md5(modifyInfo.newPassword)
      return new Promise((resolve, reject) => {
        changePassword(modifyInfo)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    register({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        addUser(userInfo)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    //根据用户名删除用户
    removeUserByUsername({ commit }, username) {
      return new Promise((resolve, reject) => {
        cancelUser(username)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}

export default user
