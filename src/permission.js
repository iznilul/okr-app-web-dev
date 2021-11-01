import { LoadingBar } from 'view-design'
import router, { asyncRoutes } from './router'
import store from './store'
import createRoutes, { recur } from '@/utils/createRoutes'
import { getDocumentTitle, resetTokenAndClearUser } from './utils'

// 是否有菜单数据，有的话代表进入管理系统主界面
let hasMenus = false
router.beforeEach(async (to, from, next) => {
  document.title = getDocumentTitle(to.meta.title)
  LoadingBar.start()
  if (localStorage.getItem('token')) {
    // console.log(to.path)
    if (to.path === '/login') {
      // console.log("permission if")
      next({ path: '/' }) //如果有token，则把login重定向为主页
    } else if (hasMenus) {
      // console.log("permission hasMenus")
      //但凡涉及到有next参数的钩子，必须调用next() 才能继续往下执行下一个钩子，否则路由跳转等会停止。
      next()
    } else {
      // console.log("permission notHasMenus")
      try {
        this.$store
          .dispatch('getRoute')
          .then((res) => {
            const result = []
            recur(result, res)
            const routes = createRoutes(result)
            console.log('route:', routes)
            router.addRoutes(routes)
            hasMenus = true
            next({ path: to.path || '/' })
          })
          .catch((error) => {
            console.error(error)
          })
      } catch (error) {
        resetTokenAndClearUser()
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    // console.log("no token")
    hasMenus = false
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  LoadingBar.finish()
})
