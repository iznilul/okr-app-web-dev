export default {
  install(Vue) {
    Vue.prototype.publicChangePage = function (index, callback) {
      this.form.index = index
      this.current = index
      callback(this.form)
    }
  },
}
