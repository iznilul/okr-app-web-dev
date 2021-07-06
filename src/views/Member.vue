<template>
  <div>
    成员管理，开发ing( ╯□╰ )
    <Query @setMember="setMember"></Query>
    <Register @selectByCond="selectByCond"></Register>
    <Table
      stripe
      border
      :columns="columns"
      :data="data"
      style="position: absolute; top: 60px; overflow-y: scroll"
      height="480"
    ></Table>
    <Page
      :total="dataCount"
      :page-size="pageSize"
      show-total
      class="paging"
      @on-change="changePage"
      style="position: absolute; top: 560px"
    ></Page>
  </div>
</template>

<script>
import { selectByCond } from '../api/user'
import Query from '../components/Query'
import Register from '../components/Register'
export default {
  name: 'member',
  components: { Register, Query },
  data() {
    return {
      columns: [
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
          key: 'account',
          width: '130px',
        },
        {
          title: '姓名',
          key: 'userName',
          width: '100px',
        },
        {
          title: '身份',
          key: 'role',
          width: '70px',
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
      ],
      data: [],
      dataCount: 0,
      pageSize: 5,
      ajaxData: [],
    }
  },
  mounted() {
    this.selectByCond()
  },
  methods: {
    selectByCond() {
      this.$store
        .dispatch('selectByCond', {})
        .then((res) => {
          // console.log(res)
          this.sliceData(res)
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: '获取成员列表失败咯',
          })
        })
    },
    changePage(index) {
      const start = (index - 1) * this.pageSize
      const end = index * this.pageSize
      this.data = this.ajaxData.slice(start, end)
    },
    setMember(data) {
      this.sliceData(data)
    },
    sliceData(data) {
      this.ajaxData = data
      this.dataCount = data.length
      // console.log(this.dataCount)
      if (this.dataCount < this.pageSize) {
        this.data = this.ajaxData
      } else {
        this.data = this.ajaxData.slice(0, this.pageSize)
      }
    },
  },
}
</script>

<style></style>
