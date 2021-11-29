import { enumKey, enumMajor, enumName, enumUsername } from '@/api/enum'

const enumApi = {
  state: {},

  mutations: {},

  actions: {
    getLikeUsername({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumUsername(param)
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
        enumName(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeMajor({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumMajor(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeKey({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumKey(param)
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

export default enumApi
