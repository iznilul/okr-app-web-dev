import store from '../store'

const map = {
  notScored: 'default',
  failed: 'error',
  pass: 'warning',
  good: 'primary',
  excellent: 'success',
}
const publishMap = {
  0: 'warning',
  1: 'primary',
}
const columns = [
  {
    title: '用户名称',
    key: 'name',
  },
  {
    title: '博客数量',
    key: 'blogNumbers',
  },
  {
    title: '上次更新时间',
    key: 'lastSubmitTime',
  },
  {
    title: '未评分',
    key: 'notScored',
    render: (h, params) => {
      let color = map['notScored']
      let notScored = params.row.notScored
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
              //   size: 'large',
            },
            style: {},
          },
          notScored
        ),
      ]
    },
  },
  {
    title: '不及格',
    key: 'failed',
    render: (h, params) => {
      let color = map['failed']
      let failed = params.row.failed
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
              //   size: 'large',
            },
            style: {},
          },
          failed
        ),
      ]
    },
  },
  {
    title: '及格',
    key: 'pass',
    render: (h, params) => {
      let color = map['pass']
      let pass = params.row.pass
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
              //   size: 'large',
            },
            style: {},
          },
          pass
        ),
      ]
    },
  },
  {
    title: '良好',
    key: 'good',
    render: (h, params) => {
      let color = map['good']
      let good = params.row.good
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
              //   size: 'large',
            },
            style: {},
          },
          good
        ),
      ]
    },
  },
  {
    title: '优秀',
    key: 'excellent',
    render: (h, params) => {
      let color = map['excellent']
      let excellent = params.row.excellent
      // console.log(type)
      return [
        h(
          'Tag',
          {
            props: {
              color: color,
              //   size: 'large',
            },
            style: {},
          },
          excellent
        ),
      ]
    },
  },
]
export default columns
