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
      <FormItem label="学习/研究方向" prop="desc">
        <Input :rows="3" type="textarea" v-model="form.desc" size="large"></Input>
      </FormItem>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'ModifyUserInfo',
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
        desc: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('modifyUserInfo', this.form)
        .then((res) => {
          // console.log(res)
          this.$Notice.success({
            desc: '更新成功',
          })
          this.$emit('userInfoByCond', {})
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: '注册失败',
          })
        })
    },
    hidden() {
      this.visible = false
    },
    show() {
      this.visible = true
    },
    userInfoByUsername(username) {
      console.log(username)
      this.$store
        .dispatch('userInfoByUsername', { username: username })
        .then((res) => {
          console.log(res)
          this.form.username = res.username
          this.form.name = res.name
          this.form.major = res.major
          this.form.qq = res.qq
          this.form.phone = res.phone
          this.form.weixin = res.weixin
          this.form.desc = res.desc
        })
        .catch((error) => {
          console.error(error)
          this.$Notice.error({
            desc: '获取用户数据失败',
          })
        })
    },
  },
}
</script>

<style lang="less">
@import '../../style/util/ModifyUserInfo';
</style>
