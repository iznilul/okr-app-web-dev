import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/Login.vue'),
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
    component: () => import('../views/Home.vue'),
  },
  member: {
    path: 'member',
    name: 'member',
    meta: { title: '成员管理' },
    component: () => import('../views/Member.vue'),
  },
  okr: {
    path: 'okr', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
    name: 'okr',
    meta: { title: 'okr系统' },
    component: () => import('../views/Okr.vue'),
  },
  key: {
    path: 'key',
    name: 'key',
    meta: { title: '钥匙管理' },
    component: () => import('../views/Key.vue'),
  },
  book: {
    path: 'book',
    name: 'book',
    meta: { title: '书籍管理' },
    component: () => import('../views/Book.vue'),
  },
  userinfo: {
    path: 'userinfo',
    name: 'userinfo',
    meta: { title: '用户信息' },
    component: () => import('../views/UserInfo.vue'),
  },
  signup: {
    path: 'signup',
    name: 'signup',
    meta: { title: '报名管理' },
    component: () => import('../views/SignUp.vue'),
  },
  ip: {
    path: 'ip',
    name: 'ip',
    meta: { title: 'ip访问记录' },
    component: () => import('../views/IP.vue'),
  },
  syslog: {
    path: 'syslog',
    name: 'syslog',
    meta: { title: '系统日志' },
    component: () => import('../views/Syslog.vue'),
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
