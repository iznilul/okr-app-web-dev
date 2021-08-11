const api = {
  login: '/api/login',
  register: '/api/admin/register',
  modifyUserInfo: '/api/user/modifyUserInfo',
  userInfoByUsername: '/api/user/userInfoByUsername',
  removeByUsername: '/api/admin/removeByUsername',
  reloadAdminRoleResource: '/api/admin/reloadAdminRoleResource',
  reloadUserRoleResource: '/api/admin/reloadUserRoleResource',
  userInfoByCond: '/api/user/userInfoByCond',
  monitorData: '/api/user/monitor/server',
  httpActuator: '/api/actuator/metrics/http.server.requests',
  upload: '/api/user/upload',
  modifyPassword: '/api/user/modifyPassword',
}

export default api
