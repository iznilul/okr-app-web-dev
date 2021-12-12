import { exportSignUp, changeSignUp, querySignUpList, querySignUp } from '@/api/signup'

const signup = {
  state: {},

  mutations: {},

  actions: {
    modifySignup({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeSignUp(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getSignUpList({ commit }, data) {
      return new Promise((resolve, reject) => {
        querySignUpList(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getSignUp({ commit }, data) {
      return new Promise((resolve, reject) => {
        querySignUp(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    exportSignUp({ commit }, data) {
      return new Promise((resolve, reject) => {
        exportSignUp(data)
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

export default signup
