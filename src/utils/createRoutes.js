export function createRoutes(data) {
  const result = []
  const children = []
  result.push({
    path: '/',
    component: () => import('../views/Layout.vue'),
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
  let len = item.children.length
  if (len === 0) {
    const route = {
      name: item.name === null ? null : item.name,
      path: item.path === null ? null : item.path,
      component: item.component === null ? null : () => import(`@/views${item.component}`),
      children: item.children,
    }
    children.push(route)
  } else {
    item.children.forEach((e) => {
      generateRoutes(children, e)
    })
  }
}
