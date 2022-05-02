import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const columns = [
  {
    title: '分类id',
    key: 'categoryId',
  },
  {
    title: '分类名',
    key: 'name',
  },
  {
    title: '排序权重',
    key: 'weight',
  },
  {
    title: '操作',
    key: 'operation',
    align: 'center',
    render: (h, params) => {
      return [
        h(
          'Button',
          {
            props: {
              type: 'primary',
            },
            on: {
              click: () => {
                showCategoryModal('modifyCategory')
                getCategory(params.row.categoryId)
              },
            },
          },
          '修改分类'
        ),
        h(
          'Button',
          {
            props: {
              type: 'warning',
            },
            style: {
              position: 'relative',
              left: '10px',
            },
            on: {
              click: () => {
                handleConfirm(removeCategory, params.row.categoryId)
              },
            },
          },
          '删除'
        ),
      ]
    },
  },
]
export default columns
