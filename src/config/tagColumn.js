import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const columns = [
  {
    title: '标签id',
    key: 'tagId',
  },
  {
    title: '标签名',
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
                showTagModal('modifyTag')
                getTag(params.row.tagId)
              },
            },
          },
          '修改标签'
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
                handleConfirm(removeTag, params.row.tagId)
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
