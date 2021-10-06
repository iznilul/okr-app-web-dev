<template>
  <div id="key">
    <!--    <Button id="button" @click="getUserInfoByCond" type="primary">添加钥匙</Button>-->
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
import columns from '../../config/KeyColumn'

export default {
  name: 'member',
  components: {},
  data() {
    return {
      columns: columns,
      data: [],
      dataCount: 0,
      current: 1,
      form: {
        index: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getKey()
    // window.showModifyUserInfo = this.showModifyUserInfo
    // window.getUserInfo = this.getUserInfo
    // window.removeUserByUsername = this.removeUserByUsername
  },
  methods: {
    getKey() {
      this.$store
        .dispatch('getKey', this.form)
        .then((res) => {
          console.log(res)
          this.pageReset(res.current)
          this.dataCount = res.total
          this.data = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeUserByUsername(username) {
      this.$store
        .dispatch('removeUserByUsername', { username: username })
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
      this.getKey(this.form)
    },

    changePageSize(pageSize) {
      // console.log(pageSize)
      this.current = 1
      this.form.index = 1
      this.form.pageSize = pageSize
      this.getKey()
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
    // showModifyUserInfo() {
    //   this.$refs.modifyUserInfo.show()
    // },
    // getUserInfo(item) {
    //   // console.log(item)
    //   this.$refs.modifyUserInfo.getUserInfo(item)
    // },
  },
}
</script>

<style lang="less">
@import '../../style/views/user/Key';
</style>
