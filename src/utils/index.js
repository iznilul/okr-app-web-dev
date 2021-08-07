import { resetRouter } from '@/router'

export function resetTokenAndClearUser() {
  // 退出登陆 清除用户资料
  localStorage.clear()
  sessionStorage.clear()
  // 重设路由
  resetRouter()
}

//标签标题
export const defaultDocumentTitle = '实验室管理系统'

export function getDocumentTitle(pageTitle) {
  if (pageTitle) return `${defaultDocumentTitle} - ${pageTitle}`
  return `${defaultDocumentTitle}`
}
