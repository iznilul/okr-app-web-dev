export default {
  install(Vue) {
    Vue.prototype.publicSend = function (method, param) {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch(method, param)
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
}
