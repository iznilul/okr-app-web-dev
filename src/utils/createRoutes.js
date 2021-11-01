// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes(data) {
  return normalRoutes(data)
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
  console.log('result', result)

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

export const recur = (result, data) => {
  data.forEach((item) => {
    console.log(item)
    let len = item.children.length
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        recur(result, item.children)
      }
    } else {
      const child = {
        name: item.name === null ? null : item.name,
        path: item.path === null ? null : item.path,
        component: item.component === null ? null : () => import(`@/views${item.component}`),
        children: item.children,
      }
      result.push(child)
    }
  })
}
