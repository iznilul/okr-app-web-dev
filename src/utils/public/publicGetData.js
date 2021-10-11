export default {
  install(Vue) {
    Vue.prototype.publicGetData = function (method, param) {
      this.$store
        .dispatch(method, param)
        .then((res) => {
          console.log(res)
          this.data = res
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
