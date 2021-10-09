export default {
  install(Vue) {
    Vue.prototype.publicChangePageSize = function (pageSize, callback) {
      this.current = 1
      this.form.index = 1
      this.form.pageSize = pageSize
      callback()
    }
  },
}
