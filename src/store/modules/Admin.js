import { reloadRoleResource, register, removeByUsername } from '@/api/Admin'

const admin = {
  state: {},

  mutations: {},

  actions: {
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
    //根据用户名删除用户
    removeByUsername({ commit }, username) {
      return new Promise((resolve, reject) => {
        removeByUsername(username)
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
    //重载管理员资源
    reloadRoleResource({ commit }, {}) {
      return new Promise((resolve, reject) => {
        reloadRoleResource({})
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
  },
}

export default admin
