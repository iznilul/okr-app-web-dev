<template>
  <Modal id="modifyModal" v-model="visible" title="修改用户信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="账号" prop="username">
        <Input disabled v-model="form.username"></Input>
      </form-item>
      <form-item label="姓名" prop="name">
        <Input v-model="form.name"></Input>
      </form-item>
      <form-item label="专业班级" prop="major">
        <Input v-model="form.major"></Input>
      </form-item>
      <form-item label="qq号" prop="qq">
        <Input v-model="form.qq"></Input>
      </form-item>
      <form-item label="手机号" prop="phone">
        <Input v-model="form.phone"></Input>
      </form-item>
      <form-item label="微信号" prop="weixin">
        <Input v-model="form.weixin"></Input>
      </form-item>
      <FormItem label="学习/研究方向" prop="research">
        <Input :rows="3" type="textarea" v-model="form.research" size="large"></Input>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'ModifyUser',
  data() {
    return {
      visible: false,
      form: {
        username: '',
        name: '',
        major: '',
        qq: '',
        phone: '',
        weixin: '',
        research: '',
      },
    }
  },
  mounted() {
    window.getUser = this.getUser
  },
  methods: {
    getUser(username) {
      this.publicGetData('getUserByUsername', { username: username })
    },

    handleSubmit() {
      this.publicSendForm('modifyUser', this.form)
        .then((res) => {
          this.$emit('getUserList', {})
        })
        .catch((error) => {
          console.log(error)
        })
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
