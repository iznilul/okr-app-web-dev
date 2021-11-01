import { fetchRoute } from '@/api/common/login'

const route = {
  state: {},

  mutations: {},

  actions: {
    // 登录
    getRoute({ commit }) {
      return new Promise((resolve, reject) => {
        fetchRoute()
          .then((response) => {
            const result = response
            resolve(result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}

export default route
