import { httpActuator, server } from '@/api/monitor'

const monitor = {
  state: {},

  mutations: {},

  actions: {
    //获取服务器监控数据
    monitorData({ commit }, {}) {
      return new Promise((resolve, reject) => {
        server({})
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    //获取Http接口请求统计数据
    httpActuator({ commit }, {}) {
      return new Promise((resolve, reject) => {
        httpActuator({})
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
export default monitor
