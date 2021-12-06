export const commonApi = {
  login: '/api/okr/common/login',
}
export const userApi = {
  changeUser: '/api/okr/user/change',
  changeUserRole: '/api/okr/user/changeRole',
  queryUser: '/api/okr/user/query',
  queryUserByUsername: '/api/okr/user/queryByUsername',
  queryUserList: '/api/okr/user/queryList',
  changeUserImg: '/api/okr/user/changeImg',
  changePassword: '/api/okr/user/changePassword',
  addUser: '/api/okr/user/add',
  cancelUser: '/api/okr/user/cancel',
}

export const bookApi = {}

export const enumApi = {
  enumUsername: '/api/okr/enum/username',
  enumName: '/api/okr/enum/name',
  enumMajor: '/api/okr/enum/major',
  enumKey: '/api/okr/enum/key',
  enumRole: '/api/okr/enum/role',
  enumUserStatus: '/api/okr/enum/userStatus',
}

export const keyApi = {
  queryKey: '/api/okr/key/query',
  queryKeyUser: '/api/okr/keyUser/query',
  borrowKey: '/api/okr/key/borrow',
  returnKey: '/api/okr/key/return',
  queryKeyById: '/api/okr/key/queryById',
  changeKey: '/api/okr/key/change',
  addKey: '/api/okr/key/add',
  cancelKey: '/api/okr/key/cancel',
}

export const sysRecordApi = {
  querySysRecord: '/api/okr/sysRecord/query',
}

export const menuApi = {
  fetchMenu: '/api/okr/menu/fetch',
}

export const monitorApi = {
  server: '/api/okr/monitor/server',
  httpActuator: '/api/okr/monitor/metrics/http.server.requests',
}

export const rankApi = {}

export const resourceApi = {}
