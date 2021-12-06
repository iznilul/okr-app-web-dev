import { querySysRecord } from '@/api/sysRecord'
const sysRecord = {
  state: {},

  mutations: {},

  actions: {
    getSysRecord({ commit }, data) {
      return new Promise((resolve, reject) => {
        querySysRecord(data)
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
export default sysRecord
