export default {
  install(Vue) {
    Vue.prototype.publicClickButton = function (method) {
      this.$store
        .dispatch(method, {})
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
