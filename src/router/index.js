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
export const asyncRoutes = [
  {
    name: 'home', // 要跳转的路由名称 不是路径
    path: 'home',
    meta: {
      text: '主页',
      type: 'md-home',
      size: 18, // icon大小
    },
    component: () => import('@/views/user/Home.vue'),
  },
  {
    path: 'userinfo',
    name: 'userinfo',
    size: 18,
    meta: {
      type: 'ios-time',
      text: '用户信息',
    },
    component: () => import('@/views/user/UserInfo.vue'),
  },
  {
    name: 'member', // 要跳转的路由名称 不是路径
    path: 'member',
    size: 18, // icon大小
    meta: {
      type: 'md-person', // icon类型
      text: '成员管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
    },
    component: () => import('@/views/user/Member.vue'),
  },
  {
    meta: {
      text: '书籍管理',
      type: 'ios-book-outline',
    },
    children: [
      {
        size: 18, // icon大小
        path: 'book',
        name: 'book',
        meta: {
          type: 'ios-book',
          text: '书籍列表',
        },
        component: () => import('@/views/user/Book.vue'),
      },
      {
        path: 'bookuser',
        name: 'bookuser',
        meta: {
          type: 'md-book',
          text: '书籍借阅记录',
        },
        component: () => import('@/views/user/BookUser.vue'),
        size: 18, // icon大小
      },
    ],
  },
  {
    meta: {
      text: '钥匙管理',
      type: 'ios-key-outline',
    },
    children: [
      {
        name: 'key', // 要跳转的路由名称 不是路径
        path: 'key',
        size: 18, // icon大小
        meta: {
          type: 'ios-key', // icon类型
          text: '钥匙列表', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/user/Key.vue'),
      },
      {
        name: 'keyuser', // 要跳转的路由名称 不是路径
        path: 'keyuser',
        size: 18, // icon大小
        meta: {
          type: 'md-key', // icon类型
          text: '钥匙流动记录', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/user/KeyUser.vue'),
      },
    ],
  },
  {
    meta: {
      text: 'okr管理',
      type: 'ios-egg-outline',
    },
    children: [
      {
        name: 'okr', // 要跳转的路由名称 不是路径
        path: 'okr',
        size: 18, // icon大小
        meta: {
          type: 'ios-egg-outline', // icon类型
          text: 'okr管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/user/Okr.vue'),
      },
    ],
  },
  {
    meta: {
      text: '管理员菜单',
      type: 'ios-lock',
    },
    children: [
      {
        name: 'sysrecord',
        path: 'sysrecord',
        size: 18,
        meta: {
          type: 'ios-time',
          text: '操作记录',
        },
        component: () => import('@/views/admin/SysRecord.vue'),
        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
        // hidden: true,
      },
      {
        name: 'syslog', // 要跳转的路由名称 不是路径
        path: 'syslog',
        size: 18, // icon大小
        meta: {
          type: 'md-list-box', // icon类型
          text: '系统日志', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/admin/Syslog.vue'),
      },
      {
        name: 'signup', // 要跳转的路由名称 不是路径
        path: 'signup',
        size: 18, // icon大小
        meta: {
          type: 'md-bookmark', // icon类型
          text: '报名信息管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/admin/SignUp.vue'),
      },
      {
        name: 'resource', // 要跳转的路由名称 不是路径
        path: 'resource',
        size: 18, // icon大小
        meta: {
          type: 'logo-buffer', // icon类型
          text: '资源接口管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/admin/Resource.vue'),
      },
      {
        name: 'tag', // 要跳转的路由名称 不是路径
        path: 'tag',
        size: 18, // icon大小
        meta: {
          type: 'md-card', // icon类型
          text: '标签管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
        },
        component: () => import('@/views/admin/Tag.vue'),
      },
    ],
  },
]

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
