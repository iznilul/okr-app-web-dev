<template>
  <div>
    用户信息页，开发中( ╯□╰ )
    <br />
    <Avatar
      :src="avatar"
      shape="square"
      icon="ios-person"
      size="200"
      style="position: absolute; left: 50px; top: 60px"
    />
    <Upload
      :data="uploadData"
      :on-success="handleSuccess"
      :format="['jpg', 'jpeg', 'png']"
      :max-size="1024"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :action="uploadUrl"
      :show-upload-list="false"
    >
      <Button icon="ios-cloud-upload-outline" style="position: absolute; left: 95px; top: 280px">上传头像</Button>
    </Upload>
    <Form ref="verify" :model="verify" :label-width="100" style="position: absolute; top: 60px; left: 350px">
      <FormItem label="当前密码" prop="oldPassword">
        <Input clearable v-model="verify.oldPassword"></Input>
      </FormItem>
      <FormItem label="新密码" prop="newPassword">
        <Input clearable v-model="verify.newPassword"></Input>
      </FormItem>
      <Button @click="verifyPassword" type="primary" style="position: absolute; left: 100px">修改密码 </Button>
    </Form>
    <Form :model="form" :label-width="100" style="position: absolute; top: 60px; left: 750px">
      <FormItem label="真实姓名">
        <Input clearable v-model="form.userName"></Input>
      </FormItem>
      <FormItem label="专业班级">
        <Input clearable v-model="form.major"></Input>
      </FormItem>
      <FormItem label="QQ号">
        <Input clearable v-model="form.qq"></Input>
      </FormItem>
      <FormItem label="手机号">
        <Input clearable v-model="form.phone"></Input>
      </FormItem>
      <FormItem label="微信号">
        <Input clearable v-model="form.weixin"></Input>
      </FormItem>
      <FormItem label="学习/研究方向">
        <Input :rows="rows" type="textarea" v-model="form.desc" size="large"></Input>
      </FormItem>
      <Button @click="updateUser" type="primary" style="position: absolute; left: 100px"> 修改资料 </Button>
    </Form>
  </div>
</template>

<script>
import api from '../api/index'
import { baseURL } from '../utils/request'

export default {
  name: 'UserInfo',
  data() {
    return {
      rows: 4,
      avatar: '',
      uploadUrl: baseURL + api.upload,
      uploadData: {
        account: sessionStorage.getItem('account')
      },
      verify: {
        oldPassword: '',
        newPassword: '',
        account: sessionStorage.getItem('account')
      },
      form: {
        account: sessionStorage.getItem('account'),
        userName: '',
        major: '',
        qq: '',
        phone: '',
        weixin: '',
        desc: ''
      }
    }
  },
  mounted() {
    this.avatar = sessionStorage.getItem('avatar')
    this.form.userName = sessionStorage.getItem('userName')
    this.form.major = sessionStorage.getItem('major')
    this.form.qq = sessionStorage.getItem('qq')
    this.form.phone = sessionStorage.getItem('phone')
    this.form.weixin = sessionStorage.getItem('weixin')
    this.form.desc = sessionStorage.getItem('desc')
  },
  methods: {
    handleSuccess(res) {
      // console.log(res)
      this.$Notice.success({
        title: '头像上传成功'
      })
      this.avatar = res.data
      sessionStorage.setItem('avatar', this.avatar)
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: '文件格式不对',
        desc: file.name + ' 文件格式不符合要求，请选择jpg或png格式文件'
      })
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: '文件太大',
        desc: file.name + '太大了， 请上传1M以内的文件.'
      })
    },
    verifyPassword() {
      this.$store
        .dispatch('verifyPassword', this.verify)
        .then(res => {
          console.log(res)
          this.$Message.success('密码修改完成')
          this.handleVerifyReset('verify')
        })
        .catch(error => {
          console.log(error)
          this.$Message.error('密码修改失败')
        })
    },
    updateUser() {
      this.$store
        .dispatch('updateUser', this.form)
        .then(res => {
          console.log(res)
          this.$store.dispatch('updateSession', this.form)
          this.$Message.success(res)
        })
        .catch(error => {
          console.log(error)
          this.$Message.error('用户信息更新失败')
        })
    },
    handleVerifyReset(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style></style>
