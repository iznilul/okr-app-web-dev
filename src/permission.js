import { LoadingBar } from 'view-design'
import router from './router'
import store from '@/store'
import { getDocumentTitle, resetTokenAndClearUser } from './utils'
import { createRoutes } from '@/utils/createRoutes'

// 是否有菜单数据，有的话代表进入管理系统主界面
let hasMenu = false
router.beforeEach(async (to, from, next) => {
  document.title = getDocumentTitle(to.meta.title)
  LoadingBar.start()
  if (localStorage.getItem('token')) {
    // console.log(to.path)
    if (to.path === '/login') {
      next({ path: '/' })
    } else if (hasMenu) {
      next()
    } else {
      try {
        console.log(hasMenu)
        const routes = createRoutes(JSON.parse(localStorage.getItem('menu')))
        console.log(routes)
        router.addRoutes(routes)
        hasMenu = true
        next({ path: to.path || '/' })
      } catch (error) {
        console.log(error)
        resetTokenAndClearUser()
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    hasMenu = false
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
