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
  userId: (state) => state.user.userId,
  username: (state) => state.user.username,
  name: (state) => state.user.name,
  avatar: (state) => state.user.avatar,
  major: (state) => state.user.major,
  qq: (state) => state.user.qq,
  phone: (state) => state.user.phone,
  weixin: (state) => state.user.weixin,
  research: (state) => state.user.research,
  type: (state) => (state.user.username === 'admin' ? 'primary' : 'warning'),
}

export default getters
