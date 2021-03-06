const map = { 0: 'warning', 1: 'success' }
const columns = [
  {
    title: '记录id',
    key: 'id',
  },
  {
    title: '钥匙名',
    key: 'keyName',
  },
  {
    title: '操作人',
    key: 'name',
  },
  {
    title: '钥匙状态',
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
          },
          statusName
        ),
      ]
    },
  },
  {
    title: '最后更新时间',
    key: 'updateTime',
  },
]
export default columns
