export default {
  install(Vue) {
    Vue.prototype.publicClickButton = function (method) {
      this.$store
        .dispatch(method, {})
        .then((res) => {
          console.log(res)
          this.$Notice.info({
            desc: '操作成功',
          })
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: '操作失败',
          })
        })
    }
  },
}
