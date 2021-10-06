import { queryKey } from '@/api/user/Key'

const key = {
  state: {},

  mutations: {},

  actions: {
    //获取服务器监控数据
    getKey({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryKey(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
  },
}
export default key
