export default {
  install(Vue) {
    Vue.prototype.publicShowModal = function (ref) {
      this.$refs[ref].show()
    }
  },
}
