import { getHttpActuator, getMonitorData } from '@/api/user'

const monitor = {
  state: {},

  mutations: {},

  actions: {
    //获取服务器监控数据
    getMonitorData({ commit }, {}) {
      return new Promise((resolve, reject) => {
        getMonitorData({})
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result.data)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
    //获取Http接口请求统计数据
    getHttpActuator({ commit }, {}) {
      return new Promise((resolve, reject) => {
        getHttpActuator({})
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result.data)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
  },
}
export default monitor
