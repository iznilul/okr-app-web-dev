<template>
  <div>
    成员管理，开发ing( ╯□╰ )
    <div class="query">
      <Form ref="form" :model="form" :label-width="50">
        <FormItem label="账号" prop="account" style="position: absolute; top: 20px">
          <Input clearable v-model="form.account" class="input" type="text" @keyup.enter.native="selectByCond"></Input>
        </FormItem>
        <FormItem label="姓名" prop="userName" style="position: absolute; top: 20px; left: 150px">
          <Input clearable v-model="form.userName" class="input" type="text" @keyup.enter.native="selectByCond"></Input>
        </FormItem>
        <FormItem label="身份" prop="role" style="position: absolute; top: 20px; left: 300px">
          <Input clearable v-model="form.role" class="input" type="text" @keyup.enter.native="selectByCond"></Input>
        </FormItem>
        <FormItem label="专业班级" prop="major" style="position: absolute; top: 20px; left: 450px" :label-width="80">
          <Input
            clearable
            v-model="form.major"
            class="input"
            type="text"
            style="width: 150px"
            @keyup.enter.native="selectByCond"
          ></Input>
        </FormItem>
        <Button @click="selectByCond" type="primary" style="position: absolute; left: 700px">查询</Button>
      </Form>
    </div>
    <Register @selectByCond="selectByCond"></Register>
    <Table
      stripe
      border
      :columns="columns"
      :data="data"
      style="position: absolute; top: 60px; overflow-y: scroll"
      height="480"
      width="1300"
    ></Table>
    <Page
      :total="dataCount"
      :page-size="pageSize"
      :current="current"
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
      current: 1,
      form: {
        role: '',
        account: '',
        userName: '',
        major: '',
        index: 1,
      },
    }
  },
  mounted() {
    this.selectByCond()
  },
  methods: {
    selectByCond() {
      this.$store
        .dispatch('selectByCond', this.form)
        .then((res) => {
          // console.log(res)

          this.pageReset(res.pageNum)
          this.dataCount = res.total
          this.data = res.list
          this.$Notice.success({
            title: '查询成功',
          })

          this.handleVerifyReset('form')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.form.index = index
      this.current = index
      this.selectByCond(this.form)
    },

    pageReset(pageNum) {
      this.current = pageNum
      this.form.index = pageNum
    },

    handleVerifyReset(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>

<style>
.input {
  width: 100px;
  height: 100px;
}
</style>
