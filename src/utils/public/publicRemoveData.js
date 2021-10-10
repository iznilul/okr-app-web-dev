export default {
  install(Vue) {
    Vue.prototype.publicRemoveData = function (method, param, id) {
      this.$store
        .dispatch(method, param)
        .then((res) => {
          // console.log(res)
          console.log(id)
          this.dataCount--
          this.data.forEach((item) => {
            if (item[id] === param[id]) {
              console.log(item)
              let index = this.data.indexOf(item)
              this.data.splice(index, 1)
            }
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
