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
    width: '80px',
  },
  {
    title: '权限',
    key: 'role',
    width: '100px',
  },
  {
    title: '权限到期时间',
    key: 'expireTime',
    width: '120px',
  },
  {
    title: '姓名',
    key: 'name',
    width: '80px',
  },
  {
    title: '状态',
    key: 'statusName',
    width: '80px',
  },
  {
    title: '专业班级',
    key: 'major',
    width: '100px',
  },
  {
    title: 'qq号',
    key: 'qq',
    width: '100px',
  },
  {
    title: '手机号',
    key: 'phone',
    width: '100px',
  },
  {
    title: '微信号',
    key: 'weixin',
    width: '100px',
  },
  {
    title: '简介',
    key: 'profile',
    width: '160px',
  },
  {
    title: '操作',
    key: 'operation',
    width: '280px',
    // align: 'center',
    render: (h, params) => {
      // console.log(params.row)
      let modify
      modify = !(
        params.row.username === store.getters.username ||
        store.getters.role === 'admin' ||
        store.getters.role === 'superAdmin'
      )
      return [
        h(
          'Button',
          {
            props: {
              disabled: store.getters.role !== 'superAdmin',
              type: 'primary',
            },
            style: {
              'background-color': store.getters.role !== 'superAdmin' ? store.getters.buttonColor : '',
            },

            on: {
              click: () => {
                // console.log(params.row.username)
                showModal('modifyUserRole')
                getUser(params.row.username)
              },
            },
          },
          '权限'
        ),
        h(
          'Button',
          {
            props: {
              disabled: modify,
              type: 'primary',
            },
            style: {
              position: 'relative',
              left: '5px',
              'background-color': modify ? store.getters.buttonColor : '',
            },

            on: {
              click: () => {
                // console.log(params.row.username)
                showModal('modifyUser')
                getUser(params.row.username)
              },
            },
          },
          '修改'
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
