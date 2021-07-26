<template>
  <div>
    <div class="query">
      <Form ref="form" :model="form" :label-width="50">
        <FormItem label="账号" prop="username" style="position: absolute; top: 20px">
          <Input
            clearable
            v-model="form.username"
            class="input"
            type="text"
            @keyup.enter.native="getUserInfoByCond"
          ></Input>
        </FormItem>
        <FormItem label="姓名" prop="name" style="position: absolute; top: 20px; left: 150px">
          <Input
            clearable
            v-model="form.name"
            class="input"
            type="text"
            @keyup.enter.native="getUserInfoByCond"
          ></Input>
        </FormItem>
        <FormItem label="身份" prop="role" style="position: absolute; top: 20px; left: 300px">
          <Input
            clearable
            v-model="form.role"
            class="input"
            type="text"
            @keyup.enter.native="getUserInfoByCond"
          ></Input>
        </FormItem>
        <FormItem label="专业班级" prop="major" style="position: absolute; top: 20px; left: 450px" :label-width="80">
          <Input
            clearable
            v-model="form.major"
            class="input"
            type="text"
            style="width: 150px"
            @keyup.enter.native="getUserInfoByCond"
          ></Input>
        </FormItem>
        <Button @click="getUserInfoByCond" type="primary" style="position: absolute; top: 20px; left: 700px"
          >查询</Button
        >
      </Form>
    </div>
    <Register @getUserInfoByCond="getUserInfoByCond" style="position: absolute; top: 20px"></Register>
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
import { getUserInfoByCond } from '../api/user'
import Query from '../components/util/Query'
import Register from '../components/util/Register'
import columns from '../config/PageColumn'
export default {
  name: 'member',
  components: { Register, Query },
  data() {
    return {
      columns: columns,
      data: [],
      dataCount: 0,
      pageSize: 5,
      current: 1,
      form: {
        role: '',
        username: '',
        name: '',
        major: '',
        index: 1,
      },
    }
  },
  mounted() {
    this.getUserInfoByCond()
  },
  methods: {
    getUserInfoByCond() {
      this.$store
        .dispatch('getUserInfoByCond', this.form)
        .then((res) => {
          // console.log(res)

          this.pageReset(res.pageNum)
          this.dataCount = res.total
          this.data = res.list
          this.$Notice.success({
            title: '查询成功',
          })

          this.handlemodifyReset('form')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.form.index = index
      this.current = index
      this.getUserInfoByCond(this.form)
    },

    pageReset(pageNum) {
      this.current = pageNum
      this.form.index = pageNum
    },

    handlemodifyReset(name) {
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
