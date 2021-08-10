const api = {
  login: '/api/login',
  register: '/api/admin/register',
  modifyUserInfo: '/api/user/modifyUserInfo',
  getUserInfoByUsername: '/api/user/getUserInfoByUsername',
  removeByUsername: '/api/admin/removeByUsername',
  reloadAdminRoleResource: '/api/admin/reloadAdminRoleResource',
  reloadUserRoleResource: '/api/admin/reloadUserRoleResource',
  getUserInfoByCond: '/api/user/getUserInfoByCond',
  getMonitorData: '/api/user/monitor/server',
  getHttpActuator: '/api/actuator/metrics/http.server.requests',
  upload: '/api/user/upload',
  modifyPassword: '/api/user/modifyPassword',
}

export default api
