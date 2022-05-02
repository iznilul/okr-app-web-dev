import { queryCategory, queryCategoryList, cancelCategory, addCategory, changeCategory } from '@/api/category'

const category = {
  state: {},

  mutations: {},

  actions: {
    modifyCategory({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeCategory(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getCategoryList({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryCategoryList(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getCategory({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryCategory(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    removeCategory({ commit }, data) {
      return new Promise((resolve, reject) => {
        cancelCategory(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    saveCategory({ commit }, data) {
      return new Promise((resolve, reject) => {
        addCategory(data)
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

export default category
