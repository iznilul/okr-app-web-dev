export default {
  install(Vue) {
    Vue.prototype.publicPageReset = function (current) {
      this.current = current
      this.form.index = current
    }
  },
}
