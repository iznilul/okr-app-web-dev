const getters = {
  menuItems: (state) => state.menu.menuItems,
  token: (state) => state.user.token,
  username: (state) => state.user.username,
  name: (state) => state.user.name,
  avatar: (state) => state.user.avatar,
  major: (state) => state.user.major,
  qq: (state) => state.user.qq,
  phone: (state) => state.user.phone,
  weixin: (state) => state.user.weixin,
  desc: (state) => state.user.desc,
}

export default getters
