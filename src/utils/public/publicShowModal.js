export default {
  install(Vue) {
    Vue.prototype.publicChangeVisible = function (ref) {
      this.$refs.modifyUser.show()
    }
  },
}
