<template>
  <div id="member">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="50" @keyup.enter.native="userInfoByCond">
        <FormItem label="账号" prop="username">
          <!--          <Input clearable v-model="form.username" type="text"></Input>-->
          <auto-complete
            clearable
            v-model="form.username"
            :data="usernameData"
            @on-search="getLikeUsername"
            placeholder="请输入查询账号"
          >
          </auto-complete>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <auto-complete
            clearable
            v-model="form.name"
            :data="nameData"
            @on-search="getLikeName"
            placeholder="请输入查询姓名"
          ></auto-complete>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <auto-complete
            clearable
            v-model="form.major"
            :data="majorData"
            @on-search="getLikeMajor"
            placeholder="请输入查询专业"
          ></auto-complete>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="userInfoByCond" type="primary">查询</Button>
    <Register @userInfoByCond="userInfoByCond" @validate="validate"></Register>
    <reload-role-resource @validate="validate"></reload-role-resource>
    <ModifyUserInfo ref="modifyUserInfo" @userInfoByCond="userInfoByCond"></ModifyUserInfo>
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
import { userInfoByCond } from '../api/User'
import Query from '../components/util/Query'
import Register from '../components/util/Register'
import ModifyUserInfo from '../components/util/ModifyUserInfo'
import ReloadRoleResource from '../components/util/ReloadRoleResource'
import columns from '../config/PageColumn'
import { queryLikeMajor, queryLikeName, queryLikeUsername } from '../utils/queryLike'
export default {
  name: 'member',
  components: { Register, Query, ModifyUserInfo, ReloadRoleResource },
  data() {
    return {
      columns: columns,
      data: [],
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
    this.userInfoByCond()
    window.showModifyUserInfo = this.showModifyUserInfo
    window.getUserInfo = this.getUserInfo
    window.removeByUsername = this.removeByUsername
  },
  methods: {
    getLikeUsername() {
      queryLikeUsername({ username: this.form.username })
        .then((res) => {
          console.log(res)
          this.usernameData = res
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getLikeName() {
      queryLikeName({ name: this.form.name })
        .then((res) => {
          console.log(res)
          this.nameData = res
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getLikeMajor() {
      queryLikeMajor({ major: this.form.major })
        .then((res) => {
          console.log(res)
          this.majorData = res
        })
        .catch((error) => {
          console.error(error)
        })
    },
    userInfoByCond() {
      this.$store
        .dispatch('userInfoByCond', this.form)
        .then((res) => {
          console.log(res)
          this.pageReset(res.current)
          this.dataCount = res.total
          this.data = res.data
          this.handleModifyReset('form')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeByUsername(username) {
      this.$store
        .dispatch('removeByUsername', { username: username })
        .then((res) => {
          // console.log(res)
          this.data.forEach((user) => {
            if (user.username === username) {
              console.log(user.username)
              let index = this.data.indexOf(user)
              this.data.splice(index, 1)
            }
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.form.index = index
      this.current = index
      this.userInfoByCond(this.form)
    },

    changePageSize(pageSize) {
      // console.log(pageSize)
      this.current = 1
      this.form.index = 1
      this.form.pageSize = pageSize
      this.userInfoByCond()
    },

    pageReset(current) {
      this.current = current
      this.form.index = current
    },

    handleModifyReset(name) {
      this.$refs[name].resetFields()
    },
    validate(callback) {
      if (this.$store.getters.username === 'admin') {
        let res = true
        callback(res)
      } else {
        this.$Notice.error({
          title: '没有操作权限',
        })
      }
    },
    showModifyUserInfo() {
      this.$refs.modifyUserInfo.show()
    },
    getUserInfo(item) {
      // console.log(item)
      this.$refs.modifyUserInfo.getUserInfo(item)
    },
  },
}
</script>

<style lang="less">
@import '../style/views/Member';
</style>
