export default {
  install(Vue) {
    Vue.prototype.publicResetForm = function (name) {
      this.$refs[name].resetFields()
    }
  },
}
