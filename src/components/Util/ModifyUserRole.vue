<template>
  <Modal id="modifyModal" v-model="visible" title="修改用户权限" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="账号" prop="username">
        <Input disabled v-model="form.username"></Input>
      </form-item>
      <form-item label="状态" prop="statusName">
        <auto-input
          :param="form.statusName"
          item="status"
          placeholder="请输入查询状态"
          dispatch="getLikeUserStatus"
          @recvParam="recvParam"
        >
        </auto-input>
      </form-item>
      <form-item label="权限" prop="role">
        <auto-input
          :param="form.role"
          item="role"
          placeholder="请输入查询角色"
          dispatch="getLikeRole"
          @recvParam="recvParam"
        >
        </auto-input>
      </form-item>
      <form-item label="权限到期时间" prop="expireTime">
        <DatePicker :value="form.expireTime" @on-change="handleChange" type="date" placeholder="选择日期"></DatePicker>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import AutoInput from '../../components/Util/AutoInput'
export default {
  name: 'ModifyUserRole',
  components: {
    AutoInput,
  },
  data() {
    return {
      visible: false,
      form: {
        username: '',
        statusName: '',
        role: '',
        expireTime: '',
      },
    }
  },
  mounted() {
    window.getUserRole = this.getUserRole
  },
  methods: {
    recvParam(item, val) {
      this.form[item] = val
    },
    getUserRole(username) {
      this.publicGetData('getUserByUsername', { username: username })
        .then((res) => {
          this.form = res
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleSubmit() {
      this.publicSend('modifyUserRole', this.form)
        .then((res) => {
          this.$emit('getUserList', {})
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleChange(date) {
      this.form.expireTime = date
    },

    hidden() {
      this.visible = false
    },

    show() {
      this.visible = true
    },
  },
}
</script>

<style lang="less">
@import '../../style/util/modifyModal';
</style>
