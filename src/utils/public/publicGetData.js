export default {
  install(Vue) {
    Vue.prototype.publicGetData = function (method, param) {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch(method, param)
          .then((res) => {
            // console.log(res)
            resolve(res)
          })
          .catch((error) => {
            // console.log(error)
            reject(error)
          })
      })
    }
  },
}
