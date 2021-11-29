import md5 from 'js-md5'
import { login } from '@/api/common'

const common = {
  state: {},

  mutations: {},

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      userInfo.password = md5(userInfo.password)
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}

export default common
