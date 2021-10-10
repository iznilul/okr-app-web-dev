export default {
  install(Vue) {
    Vue.prototype.publicSendData = function (method, param, callback) {
      this.$store
        .dispatch('register', param)
        .then((res) => {
          console.log(res)
          this.$Notice.info({
            title: resultEnum.SUCCESS.desc,
          })
          callback()
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: resultEnum.SUCCESS.desc,
          })
        })
    }
  },
}
