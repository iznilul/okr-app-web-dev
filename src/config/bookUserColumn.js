import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'primary', 1: 'warning'}
const columns = [
  {
    title: 'id',
    key:"id"
  },
  {
    title: '书名',
    key: 'bookName',
  },
  {
    title: '借书人',
    key: 'name',
  },
  {
    title: '书籍状态',
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
        title: "更新时间",
        key:"updateTime"
    }
]
export default columns
