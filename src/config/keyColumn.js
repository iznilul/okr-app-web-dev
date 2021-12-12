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
              props: {
                type: 'warning',
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
                showKeyModal('modifyKey')
                getKeyById(params.row.keyId)
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
                // console.log(params.row.username)
                handleConfirm(removeKey, params.row.keyId)
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
