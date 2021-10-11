<template>
  <div id="member">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="50" @keyup.enter.native="getUserList">
        <FormItem label="账号" prop="username">
          <auto-input
            :param="form.username"
            :placeholder="usernameHolder"
            :dispatch="usernameDispatch"
            @changeParam="changeParam('username')"
          >
          </auto-input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <auto-input
            :param="form.name"
            :placeholder="nameHolder"
            :dispatch="nameDispatch"
            @changeParam="changeParam('name')"
          >
          </auto-input>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <auto-input
            :param="form.major"
            :placeholder="majorHolder"
            :dispatch="majorDispatch"
            @changeParam="changeParam('major')"
          >
          </auto-input>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="getUserList" type="primary">查询</Button>
    <Register @getUserList="getUserList"></Register>
    <reload-role-resource></reload-role-resource>
    <ModifyUser ref="modifyUser" @getUserList="getUserList"></ModifyUser>
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
import ModifyUser from '../../components/Util/ModifyUser'
import AutoInput from '../../components/Util/AutoInput'
import ReloadRoleResource from '../../components/Util/ReloadRoleResource'
import columns from '../../config/memberColumn'

export default {
  name: 'member',
  components: { Register, Query, ModifyUser, ReloadRoleResource, AutoInput },
  props: {},
  data() {
    return {
      columns: columns,
      data: [],
      usernameHolder: '请输入查询账号',
      usernameDispatch: 'getLikeUsername',
      nameHolder: '请输入查询姓名',
      nameDispatch: 'getLikeName',
      majorHolder: '请输入查询专业',
      majorDispatch: 'getLikeMajor',
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
    window.showModal = this.showModal
    window.removeUserByUsername = this.removeUserByUsername
  },
  methods: {
    changeParam(param) {
      console.log(param)
      this.form[param] = param
      console.log(this.form)
    },

    getUserList() {
      this.publicGetForm('getUserList')
    },

    removeUserByUsername(username) {
      this.publicRemoveData('removeUserByUsername', { username: username }, this.getUserList)
    },

    changePage(index) {
      this.publicChangePage(index, this.getUserList)
    },

    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getUserList)
    },

    showModal(ref) {
      this.$refs[ref].show()
    },
  },
}
</script>

<style lang="less">
@import '../../style/views/user/member';
</style>
