import { addKey, cancelKey, changeKey, queryKeyById, borrowKey, returnKey, queryKeyUser, queryKey } from '@/api/key'
const key = {
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
            reject(error)
          })
      })
    },

    getKeyList({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
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
            reject(error)
          })
      })
    },
  },
}
export default key
