import { borrowKey, queryKey, queryKeyUser, returnKey } from '@/api/user/key'

const userKey = {
  state: {},

  mutations: {},

  actions: {
    getKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    getKeyUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryKeyUser(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    borrowKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        borrowKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    returnKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        returnKey(data)
          .then((response) => {
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
export default userKey
