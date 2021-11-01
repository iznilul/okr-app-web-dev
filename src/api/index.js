export const commonApi = {
  login: '/api/common/login',
  route: '/api/common/route/fetch',
}
export const userApi = {
  changeUser: '/api/user/user/change',
  queryUser: '/api/user/user/query',
  queryUserByUsername: '/api/user/user/queryByUsername',
  queryUserList: '/api/user/user/queryList',
  server: '/api/user/monitor/server',
  httpActuator: '/api/user/monitor/metrics/http.server.requests',
  changeUserImg: '/api/user/user/changeImg',
  changePassword: '/api/user/user/changePassword',
  queryLikeUsername: '/api/user/enum/username',
  queryLikeName: '/api/user/enum/name',
  queryLikeMajor: '/api/user/enum/major',
  queryLikeKey: '/api/user/enum/key',
  queryKey: '/api/user/key/query',
  queryKeyUser: '/api/user/keyUser/query',
  borrowKey: '/api/user/key/borrow',
  returnKey: '/api/user/key/return',
}
export const adminApi = {
  addUser: '/api/admin/user/add',
  cancelUser: '/api/admin/user/cancel',
  reloadRoleResource: '/api/admin/resource/reload',
  queryKeyById: '/api/admin/key/queryById',
  changeKey: 'api/admin/key/change',
  addKey: 'api/admin/key/add',
  cancelKey: 'api/admin/key/cancel',
}
