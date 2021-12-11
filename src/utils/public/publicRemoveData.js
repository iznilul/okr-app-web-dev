import resultEnum from '@/utils/enum/ResultEnum'

export default {
  install(Vue) {
    Vue.prototype.publicRemoveData = function (method, param, callback) {
      this.$store
        .dispatch(method, param)
        .then((res) => {
          // console.log(res)
          callback()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
