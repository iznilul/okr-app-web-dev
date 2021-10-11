export default {
  install(Vue) {
    Vue.prototype.publicGetForm = function (method) {
      console.log(this.form)
      this.$store
        .dispatch(method, this.form)
        .then((res) => {
          console.log(res)
          this.publicPageReset(res.current)
          this.dataCount = res.total
          this.data = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
