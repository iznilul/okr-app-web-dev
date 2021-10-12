export default {
  install(Vue) {
    Vue.prototype.publicResetForm = function (name) {
      console.log(name)
      console.log(this.$refs)
      this.$refs[name].resetFields()
    }
  },
}
