export default {
  install(Vue) {
    Vue.prototype.publicChangeVisible = function () {
      this.visible = !this.visible
    }
  },
}
