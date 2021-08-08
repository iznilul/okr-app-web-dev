const getters = {
  menuItems: (state) => state.menu.menuItems,
  isShowAsideTitle: (state) => state.aside.isShowAsideTitle,
  isShowRouter: (state) => state.aside.isShowRouter,
  tagsArray: (state) => state.aside.tagsArray,
  openMenus: (state) => state.aside.openMenus,
  currentPage: (state) => state.aside.currentPage,
  menuCache: (state) => state.aside.menuCache,
  asideClassName: (state) => state.aside.asideClassName,
  crumbs: (state) => state.aside.crumbs,
  theme: (state) => state.aside.theme,
}

export default getters
