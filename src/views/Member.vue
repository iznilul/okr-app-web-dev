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
          <Input clearable v-model="form.name" type="text"></Input>
        </FormItem>
        <FormItem label="专业班级" prop="major" :label-width="80">
          <Input clearable v-model="form.major" type="text"></Input>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="userInfoByCond" type="primary">查询</Button>
    <Register @userInfoByCond="userInfoByCond" @validate="validate"></Register>
    <reload-role-resource @validate="validate"></reload-role-resource>
    <ModifyUserInfo ref="modifyUserInfo" @userInfoByCond="userInfoByCond"></ModifyUserInfo>
    <Confirm ref="confirm"></Confirm>
    <transition appear name="fade">
      <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
    </transition>
    <Page
      id="page"
      :total="dataCount"
      :page-size="form.pageSize"
      :current="current"
      show-total
      class="paging"
      show-sizer
      @on-change="changePage"
    ></Page>
  </div>
</template>

<script>
import { userInfoByCond } from '../api/user'
import Query from '../components/util/Query'
import Register from '../components/util/Register'
import ModifyUserInfo from '../components/util/ModifyUserInfo'
import ReloadRoleResource from '../components/util/ReloadRoleResource'
import columns from '../config/PageColumn'
export default {
  name: 'member',
  components: { Register, Query, ModifyUserInfo, ReloadRoleResource },
  data() {
    return {
      columns: columns,
      data: [],
      usernameData: [],
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
      this.$store
        .dispatch('getLikeUsername', { username: this.form.username })
        .then((res) => {
          console.log(res)
          this.usernameData = res
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
@import '../style/animation/Fade';
</style>
