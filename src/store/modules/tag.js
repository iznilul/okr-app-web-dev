import { queryTag, queryTagList, cancelTag, addTag, changeTag } from '@/api/tag'

const tag = {
  state: {},

  mutations: {},

  actions: {
    modifyTag({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeTag(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getTagList({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryTagList(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getTag({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryTag(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    removeTag({ commit }, data) {
      return new Promise((resolve, reject) => {
        cancelTag(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    saveTag({ commit }, data) {
      return new Promise((resolve, reject) => {
        addTag(data)
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

export default tag
