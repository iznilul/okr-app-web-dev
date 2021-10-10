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
        name: 'member', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-person', // icon类型
        text: '成员管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        text: '书籍管理',
        type: 'ios-book-outline',
        children: [
          {
            name: 'book', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'ios-book', // icon类型
            text: '书籍列表', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
          {
            name: 'bookuser', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-book', // icon类型
            text: '书籍借阅记录', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
        ],
      },
      {
        text: '钥匙管理',
        type: 'ios-key-outline',
        children: [
          {
            name: 'key', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'ios-key', // icon类型
            text: '钥匙列表', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
          {
            name: 'keyuser', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-key', // icon类型
            text: '钥匙流动记录', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
        ],
      },
      {
        text: 'okr管理',
        type: 'ios-egg-outline',
        children: [
          {
            name: 'okr', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'ios-egg-outline', // icon类型
            text: 'okr管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
        ],
      },
      {
        text: '管理员菜单',
        type: 'ios-lock',
        children: [
          {
            name: 'loginlog',
            size: 18,
            type: 'ios-time',
            text: '成员操作记录',
            // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
            // hidden: true,
          },
          {
            name: 'syslog', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-list-box', // icon类型
            text: '系统日志', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
          {
            name: 'signup', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-bookmark', // icon类型
            text: '报名信息管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
          {
            name: 'resource', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'logo-buffer', // icon类型
            text: '资源接口管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
          {
            name: 'tag', // 要跳转的路由名称 不是路径
            size: 18, // icon大小
            type: 'md-card', // icon类型
            text: '标签管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
          },
        ],
      },
    ],
  },

  mutations: {},

  actions: {},
}

export default menu
