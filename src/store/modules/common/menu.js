import { fetchMenu } from '@/store/modules/user/menu'

const menu = {
  state: {
    isShowLoading: false, // 全局 loading
    // 左侧菜单栏数据
    menus: [],
  },

  mutations: {
    SET_MENUS(state, item) {
      state.menus = item
    },
  },
  actions: {
    getMenus({ commit }) {
      return new Promise((resolve, reject) => {
        fetchMenu()
          .then((response) => {
            const result = response.data
            // commit('SET_MENUS', result)
            localStorage.setItem('menu', JSON.stringify(result))
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}

export default menu
