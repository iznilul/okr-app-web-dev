const api = {
  login: '/api/common/login',
  register: '/api/admin/register',
  modifyUserInfo: '/api/user/info/modifyUserInfo',
  userInfoByUsername: '/api/user/info/userInfoByUsername',
  removeByUsername: '/api/admin/removeByUsername',
  reloadAdminRoleResource: '/api/admin/reloadAdminRoleResource',
  reloadUserRoleResource: '/api/admin/reloadUserRoleResource',
  userInfoByCond: '/api/user/info/userInfoByCond',
  monitorData: '/api/user/monitor/server',
  httpActuator: '/api/actuator/metrics/http.server.requests',
  upload: '/api/user/info/upload',
  modifyPassword: '/api/user/info/modifyPassword',
}

export default api
