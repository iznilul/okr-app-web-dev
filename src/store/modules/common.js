import { getLikeRole, getLikeUsername } from '@/api/user'

const common = {
  state: {},

  mutations: {},

  actions: {
    getLikeRole({ commit }, param) {
      return new Promise((resolve, reject) => {
        getLikeRole(param)
          .then((response) => {
            const result = response.data
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeUsername({ commit }, param) {
      return new Promise((resolve, reject) => {
        getLikeUsername(param)
          .then((response) => {
            const result = response.data
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}

export default common
