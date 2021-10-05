const api = {
  login: '/api/enum/login',
  register: '/api/admin/register',
  modifyUserInfo: '/api/user/info/modifyUserInfo',
  getUserInfo: '/api/user/info/getUserInfo',
  getUserInfoByUsername: '/api/user/info/getUserInfoByUsername',
  removeByUsername: '/api/admin/removeByUsername',
  reloadRoleResource: '/api/admin/reloadRoleResource',
  userInfoByCond: '/api/user/info/userInfoByCond',
  monitorData: '/api/user/monitor/server',
  httpActuator: '/api/actuator/metrics/http.server.requests',
  upload: '/api/user/info/upload',
  modifyPassword: '/api/user/info/modifyPassword',
  getLikeUsername: '/api/user/enum/username',
  getLikeName: '/api/user/enum/name',
  getLikeMajor: '/api/user/enum/major',
}

export default api
