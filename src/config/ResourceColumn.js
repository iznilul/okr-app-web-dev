import { handleConfirm } from '@/utils/confirm'

const map = { 0: 'error', 1: 'success' }
const columns = [
  {
    title: '接口路径',
    key: 'path',
  },
  {
    title: '接口功能',
    key: 'name',
  },
  {
    title: '接口权限',
    key: 'roleName',
  },
  {
    title: '接口状态',
    key: 'statusName',
    render: (h, params) => {
      let color = map[params.row.status]
      let statusName = params.row.statusName
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
            },
            style: {
            },
          },
          statusName
        ),
      ]
    },
  },
  {
    title: '操作',
    key: 'operation',
      fixed: 'right',
    align: 'center',
    render: (h, params) => {
      return [
        h(
          'Button',
          {
            props: {
              type: 'warning',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                handleConfirm(updateResource, params.row.resourceId)
              },
            },
          },
          params.row.status === 1 ? '关闭' : '打开'
        ),
      ]
    },
  },
]
export default columns
