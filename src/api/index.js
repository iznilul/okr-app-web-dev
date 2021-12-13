export const commonApi = {
  login: '/api/okr/common/login',
}
export const userApi = {
  changeUser: '/api/okr/user/change',
  changeUserRole: '/api/okr/user/changeRole',
  queryUser: '/api/okr/user/query',
  queryUserRole: '/api/okr/user/queryRole',
  queryUserByUsername: '/api/okr/user/queryByUsername',
  queryUserList: '/api/okr/user/queryList',
  changeUserImg: '/api/okr/user/changeImg',
  changePassword: '/api/okr/user/changePassword',
  addUser: '/api/okr/user/add',
  cancelUser: '/api/okr/user/cancel',
}

export const bookApi = {
  queryList: '/api/okr/book/queryList',
  borrowBook: '/api/okr/book/borrow',
  returnBook: '/api/okr/book/return',
  queryBook: '/api/okr/book/query',
  changeBook: '/api/okr/book/change',
  changeBookImg: '/api/okr/book/changeImg',
  addBook: '/api/okr/book/add',
  cancelBook: '/api/okr/book/cancel',
  queryBookUser: '/api/okr/bookUser/query',
}

export const enumApi = {
  enumUsername: '/api/okr/enum/username',
  enumName: '/api/okr/enum/name',
  enumMajor: '/api/okr/enum/major',
  enumKey: '/api/okr/enum/key',
  enumRole: '/api/okr/enum/role',
  enumUserStatus: '/api/okr/enum/userStatus',
  enumSignUpStatus: '/api/okr/enum/signUpStatus',
  enumBook: '/api/okr/enum/book',
  enumTag: '/api/okr/enum/tag',
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

export const resourceApi = {
  changeResource: '/api/okr/resource/change',
  queryResource: '/api/okr/resource/query',
  queryResourceName: '/api/okr/resource/queryName',
}

export const signupApi = {
  changeSignUp: '/api/okr/signup/change',
  querySignUpList: '/api/okr/signup/queryList',
  querySignUp: '/api/okr/signup/query',
  exportSignUp: '/api/okr/signup/export',
}

export const tagApi = {
  changeTag: '/api/okr/tag/change',
  queryTagList: '/api/okr/tag/queryList',
  queryTag: '/api/okr/tag/query',
  addTag: '/api/okr/tag/add',
  cancelTag: '/api/okr/tag/cancel',
}
