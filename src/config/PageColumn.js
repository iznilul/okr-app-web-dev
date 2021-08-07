import vue from '../main.js'
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
        attrs: {
          shape: 'square',
          src: params.row.avatar,
          // size: 100,
        },
        style: {
          width: '60px',
          height: '70px',
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
    key: 'desc',
    width: '270px',
  },
  {
    title: '操作',
    key: 'operation',
    width: '200px',
    // align: 'center',
    render: (h, params) => {
      // console.log(params.row)
      let type
      if (
        params.row.username === sessionStorage.getItem('username') ||
        sessionStorage.getItem('username') === 'admin'
      ) {
        type = 'primary'
      } else {
        type = 'warning'
      }
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
                if (
                  params.row.username === sessionStorage.getItem('username') ||
                  sessionStorage.getItem('username') === 'admin'
                ) {
                  getUserInfoByUsername(params.row.username)
                  showModifyUserInfo()
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
              type: sessionStorage.getItem('username') === 'admin' ? 'primary' : 'warning',
            },
            style: {
              position: 'relative',
              left: '10px',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                if (sessionStorage.getItem('username') === 'admin') {
                  removeByUsername(params.row.username)
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
