import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/common/Login.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../components/404.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
  home: {
    path: 'home',
    name: 'home',
    meta: { title: '主页' },
    component: () => import('../views/user/Home.vue'),
  },
  member: {
    path: 'member',
    name: 'member',
    meta: { title: '成员管理' },
    component: () => import('../views/user/Member.vue'),
  },
  okr: {
    path: 'okr', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
    name: 'okr',
    meta: { title: 'okr系统' },
    component: () => import('../views/user/Okr.vue'),
  },
  key: {
    path: 'key',
    name: 'key',
    meta: { title: '钥匙管理' },
    component: () => import('../views/user/Key.vue'),
  },
  keyuser: {
    path: 'keyuser',
    name: 'keyuser',
    meta: { title: '钥匙管理' },
    component: () => import('../views/user/KeyUser.vue'),
  },
  book: {
    path: 'book',
    name: 'book',
    meta: { title: '书籍列表' },
    component: () => import('../views/user/Book.vue'),
  },
  bookuser: {
    path: 'bookuser',
    name: 'bookuser',
    meta: { title: '书籍借阅记录' },
    component: () => import('../views/user/BookUser.vue'),
  },
  userinfo: {
    path: 'userinfo',
    name: 'userinfo',
    meta: { title: '用户信息' },
    component: () => import('../views/user/UserInfo.vue'),
  },
  signup: {
    path: 'signup',
    name: 'signup',
    meta: { title: '报名管理' },
    component: () => import('../views/admin/SignUp.vue'),
  },
  sysrecord: {
    path: 'sysrecord',
    name: 'sysrecord',
    meta: { title: '操作记录' },
    component: () => import('../views/admin/SysRecord.vue'),
  },
  syslog: {
    path: 'syslog',
    name: 'syslog',
    meta: { title: '系统日志' },
    component: () => import('../views/admin/Syslog.vue'),
  },
  resource: {
    path: 'resource',
    name: 'resource',
    meta: { title: '资源接口管理' },
    component: () => import('../views/admin/Resource.vue'),
  },
  tag: {
    path: 'tag',
    name: 'tag',
    meta: { title: '标签管理' },
    component: () => import('../views/admin/Tag.vue'),
  },
}

const createRouter = () =>
  new Router({
    routes: commonRoutes,
    // mode: 'history',
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
