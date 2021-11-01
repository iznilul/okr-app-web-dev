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

export const shit = {
  routeId: 1000,
  name: '',
  path: '/',
  component: 'common/Layout',
  meta: {
    size: null,
    text: '根目录',
    type: null,
  },
  hidden: null,
  external: null,
  children: [
    {
      routeId: 1001,
      name: 'home',
      path: 'home',
      component: 'user/Home',
      meta: {
        size: 18,
        text: '主页',
        type: 'md-home',
      },
      hidden: null,
      external: null,
      children: [],
    },
    {
      routeId: 1002,
      name: 'userinfo',
      path: 'userinfo',
      component: 'user/UserInfo',
      meta: {
        size: 18,
        text: '用户信息',
        type: 'ios-time',
      },
      hidden: null,
      external: null,
      children: [],
    },
    {
      routeId: 1003,
      name: 'member',
      path: 'member',
      component: 'user/Member',
      meta: {
        size: 18,
        text: '成员管理',
        type: 'md-person',
      },
      hidden: null,
      external: null,
      children: [],
    },
    {
      routeId: 2000,
      name: 'book',
      path: 'book',
      component: '',
      meta: {
        size: 18,
        text: '书籍管理',
        type: 'ios-book-outline',
      },
      hidden: null,
      external: null,
      children: [
        {
          routeId: 2001,
          name: 'booklist',
          path: 'booklist',
          component: 'user/Book',
          meta: {
            size: 18,
            text: '书籍列表',
            type: 'ios-book',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 2002,
          name: 'bookuser',
          path: 'bookuser',
          component: 'user/BookUser',
          meta: {
            size: 18,
            text: '借阅记录',
            type: 'md-book',
          },
          hidden: null,
          external: null,
          children: [],
        },
      ],
    },
    {
      routeId: 3000,
      name: 'key',
      path: 'key',
      component: '',
      meta: {
        size: 18,
        text: '钥匙管理',
        type: 'ios-key-outline',
      },
      hidden: null,
      external: null,
      children: [
        {
          routeId: 3001,
          name: 'keylist',
          path: 'keylist',
          component: 'user/Key',
          meta: {
            size: 18,
            text: '钥匙列表',
            type: 'ios-key',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 3002,
          name: 'keyuser',
          path: 'keyuser',
          component: 'user/KeyUser',
          meta: {
            size: 18,
            text: '借阅记录',
            type: 'md-key',
          },
          hidden: null,
          external: null,
          children: [],
        },
      ],
    },
    {
      routeId: 4000,
      name: 'okr',
      path: 'okr',
      component: null,
      meta: {
        size: 18,
        text: 'okr管理',
        type: 'ios-egg-outline',
      },
      hidden: null,
      external: null,
      children: [
        {
          routeId: 4001,
          name: 'okrlist',
          path: 'okrlist',
          component: 'user/Okr',
          meta: {
            size: 18,
            text: 'okr列表',
            type: 'ios-egg',
          },
          hidden: null,
          external: null,
          children: [],
        },
      ],
    },
    {
      routeId: 5000,
      name: 'admin',
      path: 'admin',
      component: '',
      meta: {
        size: 18,
        text: '管理员菜单',
        type: 'ios-lock',
      },
      hidden: null,
      external: null,
      children: [
        {
          routeId: 5001,
          name: 'sysrecord',
          path: 'sysrecord',
          component: 'admin/SysRecord',
          meta: {
            size: 18,
            text: '操作记录',
            type: 'ios-time',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 5002,
          name: 'syslog',
          path: 'syslog',
          component: 'admin/Syslog',
          meta: {
            size: 18,
            text: '系统日志',
            type: 'md-list-box',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 5003,
          name: 'signup',
          path: 'signup',
          component: 'admin/Signup',
          meta: {
            size: 18,
            text: '报名管理',
            type: 'md-bookmark',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 5004,
          name: 'resource',
          path: 'resource',
          component: 'admin/Resource',
          meta: {
            size: 18,
            text: '接口管理',
            type: 'logo-buffer',
          },
          hidden: null,
          external: null,
          children: [],
        },
        {
          routeId: 5005,
          name: 'tag',
          path: 'tag',
          component: 'admin/Tag',
          meta: {
            size: 18,
            text: '标签管理',
            type: 'md-card',
          },
          hidden: null,
          external: null,
          children: [],
        },
      ],
    },
  ],
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
