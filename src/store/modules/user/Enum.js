import {
  getLikeMajor,
  getLikeName,
  getLikeUsername,
  queryLikeMajor,
  queryLikeName,
  queryLikeUsername,
} from '@/api/user/Enum'

const enumApi = {
  state: {},

  mutations: {},

  actions: {
    getLikeUsername({ commit }, param) {
      return new Promise((resolve, reject) => {
        queryLikeUsername(param)
          .then((response) => {
            const result = response.data
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeName({ commit }, param) {
      return new Promise((resolve, reject) => {
        queryLikeName(param)
          .then((response) => {
            const result = response.data
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeMajor({ commit }, param) {
      return new Promise((resolve, reject) => {
        queryLikeMajor(param)
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

export default enumApi
