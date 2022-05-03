import store from '../store'
import { handleConfirm } from '@/utils/confirm'
import { detailBlog } from '@/api/blog'

const map = {
  0: 'default',
  1: 'error',
  2: 'warning',
  3: 'primary',
  4: 'success',
}
const publishMap = {
  0: 'warning',
  1: 'primary',
}
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
    title: '分类',
    key: 'category',
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
    title: '博客评分',
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
    title: '是否发布',
    key: 'publishName',
    render: (h, params) => {
      let color = publishMap[params.row.publishIsOrNot]
      let publishName = params.row.publishName
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
          publishName
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
              type: 'primary',
            },
            on: {
              click: () => {
                redirectToBlog(params.row.blogId)
              },
            },
          },
          '查看'
        ),
        h(
          'Button',
          {
            props: {
              disabled: disabled && params.row.username !== store.getters.username,
              type: 'primary',
            },
            style: {
              'background-color': disabled ? store.getters.buttonColor : '',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                showBlogModal('modifyBlog')
                doDetailBlog(params.row.blogId)
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
