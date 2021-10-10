<template>
  <div id="member">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="50" @keyup.enter.native="getUserList">
        <FormItem label="账号" prop="username">
          <auto-complete
            clearable
            v-model="form.username"
            :data="usernameData"
            @on-search="getLike('Username', form.username)"
            placeholder="请输入查询账号"
          >
          </auto-complete>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <auto-complete
            clearable
            v-model="form.name"
            :data="nameData"
            @on-search="getLike('Name', form.name)"
            placeholder="请输入查询姓名"
          ></auto-complete>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <auto-complete
            clearable
            v-model="form.major"
            :data="majorData"
            @on-search="getLike('Major', form.major)"
            placeholder="请输入查询专业"
          ></auto-complete>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="getUserList" type="primary">查询</Button>
    <Register @getUserList="getUserList"></Register>
    <reload-role-resource></reload-role-resource>
    <ModifyUserInfo ref="modifyUser" @getUserList="getUserList"></ModifyUserInfo>
    <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
    <Page
      id="page"
      :total="dataCount"
      :page-size="form.pageSize"
      :current="current"
      show-total
      class="paging"
      show-sizer
      @on-change="changePage"
      @on-page-size-change="changePageSize"
    ></Page>
  </div>
</template>

<script>
import Query from '../../components/Util/Query'
import Register from '../../components/Util/Register'
import ModifyUserInfo from '../../components/Util/ModifyUserInfo'
import ReloadRoleResource from '../../components/Util/ReloadRoleResource'
import columns from '../../config/memberColumn'
import { queryLike } from '../../utils/queryLike'

export default {
  name: 'member',
  components: { Register, Query, ModifyUserInfo, ReloadRoleResource },
  data() {
    return {
      columns: columns,
      data: [],
      queryData: [],
      usernameData: [],
      nameData: [],
      majorData: [],
      dataCount: 0,
      current: 1,
      form: {
        username: '',
        name: '',
        major: '',
        index: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getUserList()
    window.showModifyUserInfo = this.showModifyUserInfo
    window.getUser = this.getUser
    window.removeUserByUsername = this.removeUserByUsername
  },
  methods: {
    getLike(pattern, param) {
      queryLike(pattern, { param: param })
        .then((res) => {
          console.log(res)
          if (pattern === 'Username') {
            this.usernameData = res
          } else if (pattern === 'Name') {
            this.nameData = res
          } else {
            this.majorData = res
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getUserList() {
      this.$store
        .dispatch('getUserList', this.form)
        .then((res) => {
          console.log(res)
          this.pageReset(res.current)
          this.dataCount = res.total
          this.data = res.data
          this.publicResetForm('form')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeUserByUsername(username) {
      this.publicRemoveData('removeUserByUsername', { username: username }, 'username')
    },

    changePage(index) {
      this.form.index = index
      this.current = index
      this.getUserList(this.form)
    },

    changePageSize(pageSize) {
      // console.log(pageSize)
      this.current = 1
      this.form.index = 1
      this.form.pageSize = pageSize
      this.getUserList()
    },

    pageReset(current) {
      this.current = current
      this.form.index = current
    },

    showModifyUserInfo() {
      this.$refs.modifyUser.show()
    },
    getUser(item) {
      // console.log(item)
      this.$refs.modifyUser.getUser(item)
    },
  },
}
</script>

<style lang="less">
@import '../../style/views/user/member';
</style>
