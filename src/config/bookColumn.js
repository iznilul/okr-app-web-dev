import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'primary', 1: 'warning', 2: 'error' }
const columns = [
  {
    title: '封面',
    width: '100px',
    height: '120px',
    render: (h, params) => {
      return h('Avatar', {
        props: {
          shape: 'circle',
          src: params.row.img,
        },
        style: {
          width: '70px',
          height: '70px',
          margin: '5px',
        },
      })
    },
  },
  {
    title: '书名',
    key: 'bookName',
  },
  {
    title: '出版社',
    key: 'publisher',
    width: '160px',
  },
  {
    title: '关联标签',
    width: '300px',
    render: (h, params) => {
      let tagList = params.row.tagList
      return h(
        'div',
        {},
        tagList.map((item) => {
          return h(
            'Tag',
            {
              props: {
                size: 'medium',
              },
            },
            item
          )
        })
      )
    },
  },
  {
    title: '书籍状态',
    key: 'statusName',
    width: '100px',
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
              size: 'large',
            },
            style: {
              position: 'relative',
              left: '10px',
            },
          },
          statusName
        ),
      ]
    },
  },
  {
    title: '借/还',
    key: 'borrow/return',
    align: 'center',
    render: (h, params) => {
      // console.log(params.row)
      let status = params.row.status
      let flag = params.row.userId === store.getters.userId
      if (status === 0) {
        return [
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
                  // console.log(params.row.username)
                  handleConfirm(borrowBook, params.row.bookId)
                },
              },
            },
            '借用'
          ),
        ]
      } else if (status === 1 && flag) {
        return [
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
                  handleConfirm(returnBook, params.row.bookId)
                },
              },
            },
            '归还'
          ),
        ]
      }
    },
  },
  {
    title: '操作',
    key: 'operation',
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
                showBookModal('modifyBook')
                getBook(params.row.bookId)
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
              left: '10px',
              'background-color': disabled ? store.getters.buttonColor : '',
            },
            on: {
              click: () => {
                handleConfirm(removeBook, params.row.bookId)
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
