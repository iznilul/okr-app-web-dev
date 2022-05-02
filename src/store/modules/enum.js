import {
  enumBook,
  enumCategory,
  enumKey,
  enumMajor,
  enumName,
  enumOriginal,
  enumRole,
  enumSignUpStatus,
  enumTag,
  enumUsername,
  enumUserStatus,
} from '@/api/enum'

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
    getLikeRole({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumRole(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeUserStatus({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumUserStatus(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getLikeSignUpStatus({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumSignUpStatus(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getLikeBook({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumBook(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getLikeTag({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumTag(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getLikeOriginal({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumOriginal(param)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getLikeCategory({ commit }, param) {
      return new Promise((resolve, reject) => {
        enumCategory(param)
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
