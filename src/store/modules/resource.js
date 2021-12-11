import { changeResource, queryResource, queryResourceName } from '@/api/resource'

const resource = {
  state: {},

  mutations: {},

  actions: {
    updateResource({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeResource(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getResource({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryResource(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getResourceName({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryResourceName(data)
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

export default resource
