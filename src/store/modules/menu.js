// import { ACCESS_TOKEN } from '@/store/mutation-types'
// import { welcome } from '@/utils/util'

const menu = {
  state: {
    isShowLoading: false, // 全局 loading
    // 左侧菜单栏数据
    menuItems: [
      {
        name: 'home', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-home', // icon类型
        text: '主页', // 文本内容
      },
      {
        name: 'userinfo',
        size: 18,
        // type: 'ios-time',
        text: '用户信息',
        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
        // hidden: true
      },
      {
        name: 'okr', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'ios-egg-outline', // icon类型
        text: 'okr管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        size: 18, // icon大小
        type: 'md-arrow-forward', // icon类型
        text: 'okr主页跳转',
        url: 'https://www.baidu.com',
        isExternal: true, // 外链 跳到一个外部的 URL 页面
      },
      {
        name: 'member', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-person', // icon类型
        text: '成员管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        name: 'book', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-book', // icon类型
        text: '书籍管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        name: 'key', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'ios-key', // icon类型
        text: '钥匙管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        name: 'signup', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-school', // icon类型
        text: '报名管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        text: '安全管理',
        type: 'ios-lock',
        children: [
          {
            name: 'ip',
            size: 18,
            type: 'ios-time',
            text: '访问ip记录',
            // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
            // hidden: true,
          },
          {
            name: 'syslog', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-list-box', // icon类型
            text: '系统日志', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
        ],
      },
    ],
  },

  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items]
    },
    setLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading
    },
  },

  actions: {},
}

export default menu
