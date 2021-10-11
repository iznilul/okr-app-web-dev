export default {
  install(Vue) {
    Vue.prototype.publicGetLike = function (method, param) {
      this.$store
        .dispatch(method, param)
        .then((res) => {
          console.log(res)
          this.form = res
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
