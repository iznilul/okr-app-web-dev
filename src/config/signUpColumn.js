import { handleConfirm } from '@/utils/confirm'
const map = { 0: 'warning', 1: 'success', 2: 'error' }
const columns = [
  {
    title: '学号',
    key: 'studentId',
  },
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '性别',
    key: 'gender',
  },
  {
    title: 'qq号',
    key: 'qq',
  },
  {
    title: '专业班级',
    key: 'major',
  },
  {
    title: '自我介绍',
    key: 'profile',
  },
  {
    title: '录取状态',
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
  },
  {
    title: '操作',
    key: 'operation',
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
