import { reloadRoleResource } from '@/api/admin/User'

const resource = {
  state: {},

  mutations: {},

  actions: {
    //重载管理员资源
    reloadRoleResource({ commit }, {}) {
      return new Promise((resolve, reject) => {
        reloadRoleResource({})
          .then((response) => {
            const result = response
            console.log(result)
            resolve(result)
          })
          .catch((error) => {
            // console.log("error",error)
            reject(error)
          })
      })
    },
  },
}

export default resource
