import vue from '../main.js'
import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const columns = [
  {
    title: '钥匙id',
    key: 'keyId',
    // width: '130px',
  },
  {
    title: '钥匙名',
    key: 'keyName',
    // width: '150px',
  },
  {
    title: '钥匙状态',
    key: 'statusName',
    // width: '120px',
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
                if (params.row.username === store.getters.username || store.getters.username === 'admin') {
                  // getUserInfo(params.row.username)
                  // showModifyUserInfo()
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
                  // handleConfirm(removeUserByUsername, params.row.username)
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
