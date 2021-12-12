import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'warning', 1: 'success', 2: 'error' }
const columns = [
  {
    title: '学号',
    key: 'studentId',
    width: '130px',
  },
  {
    title: '姓名',
    key: 'name',
    width: '60px',
  },
  {
    title: '性别',
    key: 'gender',
    width: '40px',
  },
  {
    title: 'qq号',
    key: 'qq',
    width: '110px',
  },
  {
    title: '专业班级',
    key: 'major',
    width: '120px',
  },
  {
    title: '自我介绍',
    key: 'profile',
    width: '350px',
  },
  {
    title: '录取状态',
    key: 'statusName',
    width: '120px',
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
    title: '评价',
    key: 'comment',
    width: '200px',
  },
  {
    title: '操作',
    key: 'operation',
    width: '100px',
    align: 'center',
    render: (h, params) => {
      return [
        h(
          'Button',
          {
            props: {
              type: 'primary',
            },
            on: {
              click: () => {
                // console.log(params.row.username)
                showSignUpModal('modifySignUp')
                getSignUp(params.row.studentId)
              },
            },
          },
          '评价'
        ),
      ]
    },
  },
]
export default columns
