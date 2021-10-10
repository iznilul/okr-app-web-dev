import { addKey, cancelKey, changeKey, queryKeyById } from '@/api/admin/key'

const adminKey = {
  state: {},

  mutations: {},

  actions: {
    getKeyById({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryKeyById(data)
          .then((response) => {
            // console.log(response)
            resolve(response.data)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    modifyKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    saveKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        addKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    removeKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        cancelKey(data)
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
export default adminKey
