const aside = {
  state: {
    asideClassName: 'aside-big', // 控制侧边栏宽度变化
    isShowAsideTitle: true, // 是否展示侧边栏内容
    isShowRouter: true, //是否展示路由内容
    asideArrowIcons: [], // 缓存侧边栏箭头图标 收缩时用
    currentPage: '', //当前主页
    tagsArray: [], // 用于缓存打开的路由 在标签栏上展示
    crumbs: '主页', //面包屑
    openMenus: [], // 要打开的菜单名字 name属性
    menuCache: [], // 缓存已经打开的菜单
    theme: 0, //主题模式
  },

  mutations: {
    setTheme(state, item) {
      state.theme = item
    },
    setIsShowAsideTitles(state, item) {
      state.isShowAsideTitle = item
    },
    setIsShowRouter(state, item) {
      state.isShowRouter = item
    },
    setAsideClassName(state, item) {
      state.asideClassName = item
    },
    setCurrentPage(state, item) {
      state.currentPage = item
    },
    setCrumbs(state, item) {
      state.crumbs = item
    },
    setOpenMenus(state, item) {
      state.openMenus = item
    },
    setMenuCache(state, item) {
      state.menuCache = item
    },
    shiftTagsArray(state) {
      state.tagsArray.shift()
    },
    setTagsArray(state, item) {
      state.tagsArray = item
    },
    pushTagsArray(state, item) {
      state.tagsArray.push(item)
    },
    spliceTagsArray(state, item) {
      if (item[2]) {
        state.tagsArray.splice(item[0], item[1], item[2])
      } else {
        state.tagsArray.splice(item[0], item[1])
      }
    },
  },

  actions: {},
}

export default aside
