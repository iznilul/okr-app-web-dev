export const commonApi = {
  login: '/api/blog/common/login',
}
export const userApi = {
  changeUser: '/api/blog/user/change',
  changeUserRole: '/api/blog/user/changeRole',
  queryUser: '/api/blog/user/query',
  queryUserRole: '/api/blog/user/queryRole',
  queryUserByUsername: '/api/blog/user/queryByUsername',
  queryUserList: '/api/blog/user/queryList',
  changeUserImg: '/api/blog/user/changeImg',
  changePassword: '/api/blog/user/changePassword',
  addUser: '/api/blog/user/add',
  cancelUser: '/api/blog/user/cancel',
}

export const blogApi = {
  addBlog: '/api/blog/blog/add',
  changeBlog: '/api/blog/blog/change',
  cancelBlog: '/api/blog/blog/cancel',
  queryBlog: '/api/blog/blog/query',
  detailBlog: '/api/blog/blog/detail',
  queryBlogList: '/api/blog/blog/queryList',
  queryUserBlogList: '/api/blog/blog/queryUserBlogList',
}

export const bookApi = {
  queryList: '/api/blog/book/queryList',
  borrowBook: '/api/blog/book/borrow',
  returnBook: '/api/blog/book/return',
  queryBook: '/api/blog/book/query',
  changeBook: '/api/blog/book/change',
  changeBookImg: '/api/blog/book/changeImg',
  addBook: '/api/blog/book/add',
  cancelBook: '/api/blog/book/cancel',
  queryBookUser: '/api/blog/bookUser/query',
}

export const enumApi = {
  enumUsername: '/api/blog/enum/username',
  enumName: '/api/blog/enum/name',
  enumMajor: '/api/blog/enum/major',
  enumKey: '/api/blog/enum/key',
  enumRole: '/api/blog/enum/role',
  enumUserStatus: '/api/blog/enum/userStatus',
  enumSignUpStatus: '/api/blog/enum/signUpStatus',
  enumBook: '/api/blog/enum/book',
  enumTag: '/api/blog/enum/tag',
  enumOriginal: '/api/blog/enum/original',
  enumCategory: '/api/blog/enum/category',
  enumPublish: '/api/blog/enum/publish',
  enumBlog: '/api/blog/enum/blog',
}

export const keyApi = {
  queryKey: '/api/blog/key/query',
  queryKeyUser: '/api/blog/keyUser/query',
  borrowKey: '/api/blog/key/borrow',
  returnKey: '/api/blog/key/return',
  queryKeyById: '/api/blog/key/queryById',
  changeKey: '/api/blog/key/change',
  addKey: '/api/blog/key/add',
  cancelKey: '/api/blog/key/cancel',
}

export const sysRecordApi = {
  querySysRecord: '/api/blog/sysRecord/query',
}

export const menuApi = {
  fetchMenu: '/api/blog/menu/fetch',
}

export const monitorApi = {
  server: '/api/blog/monitor/server',
  httpActuator: '/api/blog/monitor/metrics/http.server.requests',
}

export const rankApi = {}

export const resourceApi = {
  changeResource: '/api/blog/resource/change',
  queryResource: '/api/blog/resource/query',
}

export const signupApi = {
  changeSignUp: '/api/blog/signup/change',
  querySignUpList: '/api/blog/signup/queryList',
  querySignUp: '/api/blog/signup/query',
  exportSignUp: '/api/blog/signup/export',
}

export const tagApi = {
  changeTag: '/api/blog/tag/change',
  queryTagList: '/api/blog/tag/queryList',
  queryTag: '/api/blog/tag/query',
  addTag: '/api/blog/tag/add',
  cancelTag: '/api/blog/tag/cancel',
}

export const categoryApi = {
  changeCategory: '/api/blog/category/change',
  queryCategoryList: '/api/blog/category/queryList',
  queryCategory: '/api/blog/category/query',
  addCategory: '/api/blog/category/add',
  cancelCategory: '/api/blog/category/cancel',
}
