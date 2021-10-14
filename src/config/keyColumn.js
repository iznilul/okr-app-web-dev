import vue from '../main.js'
import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'primary', 1: 'warning', 2: 'error' }
const columns = [
  {
    title: '钥匙id',
    key: 'keyId',
  },
  {
    title: '钥匙名',
    key: 'keyName',
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
            attrs: {
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
    // width: '200px',
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
              attrs: {
                type: 'primary',
              },
              style: {
                position: 'relative',
                left: '10px',
              },
              on: {
                click: () => {
                  // console.log(params.row.username)
                  handleConfirm(borrowKey, params.row.keyId)
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
              attrs: {
                type: 'primary',
              },
              style: {
                position: 'relative',
                left: '10px',
              },
              on: {
                click: () => {
                  handleConfirm(returnKey, params.row.keyId)
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
    // width: '200px',
    align: 'center',
    render: (h, params) => {
      // console.log(params.row)
      let type = store.getters.type
      return [
        h(
          'Button',
          {
            attrs: {
              type: type,
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                if (store.getters.username === 'admin') {
                  showModal('modifyKey')
                  getKeyById(params.row.keyId)
                } else {
                  vue.$Notice.error({
                    title: '没有操作权限',
                  })
                }
              },
            },
          },
          '修改信息'
        ),
        h(
          'Button',
          {
            attrs: {
              type: type,
            },
            style: {
              position: 'relative',
              left: '10px',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                if (store.getters.username === 'admin') {
                  handleConfirm(removeKey, params.row.keyId)
                } else {
                  vue.$Notice.error({
                    title: '没有操作权限',
                  })
                }
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
