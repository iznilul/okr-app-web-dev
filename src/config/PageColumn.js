const columns = [
  {
    title: '头像',
    key: 'avatar',
    width: '120px',
    render: (h, params) => {
      // console.log(params.row.avatar)
      return h('Avatar', {
        attrs: {
          shape: 'square',
          src: params.row.avatar,
          // size: 100,
        },
        style: {
          width: '100px',
          height: '120px',
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
    // width: '200px',
  },
]
export default columns
