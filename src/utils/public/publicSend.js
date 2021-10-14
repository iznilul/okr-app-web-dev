import resultEnum from '@/utils/enum/ResultEnum'

export default {
  install(Vue) {
    Vue.prototype.publicSend = function (method, param) {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch(method, param)
          .then((res) => {
            this.$Notice.info({
              desc: resultEnum.SUCCESS.desc,
            })
            resolve(res)
          })
          .catch((error) => {
            this.$Notice.error({
              desc: resultEnum.FAIL.desc,
            })
            reject(error)
          })
      })
    }
  },
}
