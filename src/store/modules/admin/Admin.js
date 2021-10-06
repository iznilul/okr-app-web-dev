import { addUser, cancelUser } from '@/api/admin/User'

const user = {
  state: {},

  mutations: {},

  actions: {
    //新用户注册
    register({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        console.log('userInfo', userInfo)
        addUser(userInfo)
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
    removeUserByUsername({ commit }, username) {
      return new Promise((resolve, reject) => {
        cancelUser(username)
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
  },
}

export default user
