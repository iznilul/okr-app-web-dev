import { asyncRoutes } from '@/router'
const menu = {
  state: {
    isShowLoading: false, // 全局 loading
    // 左侧菜单栏数据
    menuItems: asyncRoutes,
  },

  mutations: {},

  actions: {},
}

export default menu
