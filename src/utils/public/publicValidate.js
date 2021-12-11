export default {
  install(Vue) {
    Vue.prototype.publicValidate = function () {
      if (this.$store.getters.username === 'admin' || this.$store.getters.username === 'superAdmin') {
        return true
      } else {
        this.$Notice.error({
          title: '没有操作权限',
        })
      }
    }
  },
}
