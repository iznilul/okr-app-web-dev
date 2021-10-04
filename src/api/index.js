const api = {
  login: '/api/common/login',
  register: '/api/admin/register',
  modifyUserInfo: '/api/user/info/modifyUserInfo',
  getUserInfo: '/api/user/info/getUserInfo',
  removeByUsername: '/api/admin/removeByUsername',
  reloadAdminRoleResource: '/api/admin/reloadAdminRoleResource',
  reloadUserRoleResource: '/api/admin/reloadUserRoleResource',
  userInfoByCond: '/api/user/info/userInfoByCond',
  monitorData: '/api/user/monitor/server',
  httpActuator: '/api/actuator/metrics/http.server.requests',
  upload: '/api/user/info/upload',
  modifyPassword: '/api/user/info/modifyPassword',
  getLikeRole: '/api/user/enum/role',
  getLikeUsername: '/api/user/enum/username',
}

export default api
