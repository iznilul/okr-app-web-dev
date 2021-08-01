<template>
  <div id="member">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="50" @keyup.enter.native="getUserInfoByCond">
        <FormItem label="账号" prop="username">
          <Input clearable v-model="form.username" type="text"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input clearable v-model="form.name" type="text"></Input>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <Input clearable v-model="form.major" type="text"></Input>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="getUserInfoByCond" type="primary">查询</Button>
    <Register @getUserInfoByCond="getUserInfoByCond"></Register>
    <ModifyUserInfo ref="modifyUserInfo" @getUserInfoByCond="getUserInfoByCond"></ModifyUserInfo>
    <transition appear name="fade">
      <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
    </transition>
    <Page
      id="page"
      :total="dataCount"
      :page-size="pageSize"
      :current="current"
      show-total
      class="paging"
      @on-change="changePage"
    ></Page>
  </div>
</template>

<script>
import { getUserInfoByCond } from '../api/user'
import Query from '../components/util/Query'
import Register from '../components/util/Register'
import ModifyUserInfo from '../components/util/ModifyUserInfo'
import columns from '../config/PageColumn'
export default {
  name: 'member',
  components: { Register, Query, ModifyUserInfo },
  data() {
    return {
      columns: columns,
      data: [],
      dataCount: 0,
      pageSize: 8,
      current: 1,
      form: {
        username: '',
        name: '',
        major: '',
        index: 1,
      },
    }
  },
  mounted() {
    this.getUserInfoByCond()
    window.showModifyUserInfo = this.showModifyUserInfo
    // window.setUsername = this.setUsername
    window.getUserInfoByUsername = this.getUserInfoByUsername
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

    showModifyUserInfo() {
      this.$refs.modifyUserInfo.show()
    },
    // setUsername(item) {
    //   console.log(item)
    //   this.$refs.modifyUserInfo.setUsername(item)
    // },
    getUserInfoByUsername(item) {
      // console.log(item)
      this.$refs.modifyUserInfo.getUserInfoByUsername(item)
    },
  },
}
</script>

<style lang="less">
@import '../style/views/Member';
@import '../style/animation/Fade';
</style>
