import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'default', 1: 'error', 2: 'warning', 3: 'primary', 4: 'success' }
const columns = [
  {
    title: '博客id',
    key: 'blogId',
  },
  {
    title: '标题',
    key: 'title',
  },
  {
    title: '作者',
    key: 'name',
  },
  {
    title: '更新时间',
    key: 'updateTime',
  },
  {
    title: '关联标签',
    render: (h, params) => {
      let tagList = params.row.tagList
      return h(
        'div',
        {},
        tagList.map((item) => {
          return h(
            'Tag',
            {
              props: {},
            },
            item
          )
        })
      )
    },
  },
  {
    title: '博客状态',
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
              //   size: 'large',
            },
            style: {},
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
      // console.log(params.row)
      let disabled = store.getters.disabled
      return [
        h(
          'Button',
          {
            props: {
              disabled: disabled,
              type: 'primary',
            },
            style: {
              'background-color': disabled ? store.getters.buttonColor : '',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                showBlogModal('modifyBlog')
                getBlog(params.row.blogId)
              },
            },
          },
          '修改信息'
        ),
        h(
          'Button',
          {
            props: {
              disabled: disabled,
              type: 'warning',
            },
            style: {
              position: 'relative',
              'background-color': disabled ? store.getters.buttonColor : '',
            },
            on: {
              click: () => {
                handleConfirm(removeBlog, params.row.blogId)
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
