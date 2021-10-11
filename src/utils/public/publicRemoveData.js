import resultEnum from '@/utils/enum/ResultEnum'

export default {
  install(Vue) {
    Vue.prototype.publicRemoveData = function (method, param, callback) {
      this.$store
        .dispatch(method, param)
        .then((res) => {
          // console.log(res)
          callback()
          // this.dataCount--
          // this.data.forEach((item) => {
          //   if (item[id] === param[id]) {
          //     console.log(item)
          //     let index = this.data.indexOf(item)
          //     this.data.splice(index, 1)
          //   }
          // })
          this.$Notice.success({
            desc: resultEnum.SUCCESS.desc,
          })
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: resultEnum.FAIL.desc,
          })
        })
    }
  },
}
