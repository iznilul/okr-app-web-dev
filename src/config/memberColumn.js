import store from '../store'
import { handleConfirm } from '@/utils/confirm'
const columns = [
  {
    title: '头像',
    key: 'avatar',
    width: '70px',
    height: '70px',
    className: 'avatar',
    align: 'center',
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
  },
    {
        title: '姓名',
        key: 'name',
    },
  {
    title: '权限',
    key: 'role',
  },
  {
    title: '权限到期时间',
    key: 'expireTime',
  },
  // {
  //   title: '状态',
  //   key: 'statusName',
  // },
  {
    title: '专业班级',
    key: 'major',
  },
  // {
  //   title: 'qq号',
  //   key: 'qq',
  // },
  // {
  //   title: '手机号',
  //   key: 'phone',
  // },
  // {
  //   title: '微信号',
  //   key: 'weixin',
  // },
  {
    title: '简介',
    key: 'profile',
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
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
                getUserRole(params.row.username)
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
