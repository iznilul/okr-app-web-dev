import { httpActuator, monitorData, server } from '@/api/user/Monitor'

const monitor = {
  state: {},

  mutations: {},

  actions: {
    //获取服务器监控数据
    monitorData({ commit }, {}) {
      return new Promise((resolve, reject) => {
        server({})
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
    httpActuator({ commit }, {}) {
      return new Promise((resolve, reject) => {
        httpActuator({})
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