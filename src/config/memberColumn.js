import vue from '../main.js'
import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const columns = [
  {
    title: '头像',
    key: 'avatar',
    width: '70px',
    height: '70px',
    className: 'avatar',

    render: (h, params) => {
      // console.log(params.row.avatar)
      return h('Avatar', {
        props: {
          shape: 'circle',
          src: params.row.avatar,
          // size: 100,
        },
        style: {
          width: '50px',
          height: '50px',
          margin: '5px',
        },
      })
    },
  },
  {
    title: '账号',
    key: 'username',
    width: '130px',
  },
  {
    title: '姓名',
    key: 'name',
    width: '100px',
  },
  {
    title: '专业班级',
    key: 'major',
    width: '120px',
  },
  {
    title: 'qq号',
    key: 'qq',
    width: '120px',
  },
  {
    title: '手机号',
    key: 'phone',
    width: '130px',
  },
  {
    title: '微信号',
    key: 'weixin',
    width: '130px',
  },
  {
    title: '学习/研究方向',
    key: 'research',
    width: '270px',
  },
  {
    title: '操作',
    key: 'operation',
    width: '200px',
    // align: 'center',
    render: (h, params) => {
      // console.log(params.row)
      let disabled
      disabled = !(params.row.username === store.getters.username || store.getters.username === 'admin')
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
                showModal('modifyUser')
                getUser(params.row.username)
              },
            },
          },
          '修改信息'
        ),
        h(
          'Button',
          {
            props: {
              disabled: store.getters.disabled,
              type: 'warning',
            },
            style: {
              position: 'relative',
              left: '10px',
              'background-color': store.getters.disabled ? store.getters.buttonColor : '',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                handleConfirm(removeUserByUsername, params.row.username)
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
