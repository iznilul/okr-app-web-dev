import { shit } from '@/router'
// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes(data) {
  const result = []
  // console.log(shit)
  data = recur(shit)
  console.log(data)
  result.push(data)
  return result
  // return normalRoutes(data)
}

function normalRoutes(data) {
  const result = []
  const children = []
  result.push({
    path: '/',
    component: () => import('../views/common/Layout.vue'),
    children,
  })
  data.forEach((item) => {
    generateRoutes(children, item)
  })
  result.push({
    path: '*',
    redirect: '/404',
  })
  return result
}
function generateRoutes(children, item) {
  if (item.name) {
    children.push(item)
  } else if (item.children) {
    item.children.forEach((e) => {
      generateRoutes(children, e)
    })
  }
}

const recur = (data) => {
  const child = {
    name: data.name,
    path: data.path,
    component: data.component === '' ? null : () => import(`@/views/${data.component}`),
    children: data.children,
  }

  let len = child.children.length
  for (let i = 0; i < len; i++) {
    child.children[i] = recur(child.children[i])
  }
  return child
}
