<template>
  <div id="member">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="50" @keyup.enter.native="getUserList">
        <FormItem label="账号" prop="username">
          <auto-input
            :param="form.username"
            item="username"
            placeholder="请输入查询账号"
            dispatch="getLikeUsername"
            @recvParam="recvParam"
          >
          </auto-input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <auto-input
            :param="form.name"
            item="name"
            placeholder="请输入查询姓名"
            dispatch="getLikeName"
            @recvParam="recvParam"
          >
          </auto-input>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <auto-input
            :param="form.major"
            item="major"
            placeholder="请输入查询专业"
            dispatch="getLikeMajor"
            @recvParam="recvParam"
          >
          </auto-input>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="getUserList" type="primary">查询</Button>
    <Reset @reset="reset"></Reset>
    <Register @getUserList="getUserList"></Register>
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
import Reset from '../../components/Util/Reset'
import columns from '../../config/memberColumn'

export default {
  name: 'member',
  components: { Register, Query, ModifyUser, AutoInput, Reset },
  props: {},
  data() {
    return {
      columns: columns,
      data: [],
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
    recvParam(item, val) {
      this.form[item] = val
    },

    reset() {
      this.form.username = ''
      this.form.name = ''
      this.form.major = ''
      this.getUserList()
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
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="less">
@import '../../style/views/user/member';
</style>
