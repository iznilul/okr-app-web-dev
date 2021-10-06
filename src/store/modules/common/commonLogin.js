import { login } from '@/api/common/Login'
import md5 from 'js-md5'
const commonLogin = {
  state: {},

  mutations: {},

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      userInfo.password = md5(userInfo.password)
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
  },
}

export default commonLogin
