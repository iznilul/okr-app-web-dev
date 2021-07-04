<template>
  <div>
    用户信息页，开发中( ╯□╰ )
    <br />
    <Avatar shape="square" icon="ios-person" size="200" style="position: absolute;left: 50px;top:60px" />
    <Upload
      :on-success="handleSuccess"
      :format="['jpg', 'jpeg', 'png']"
      :max-size="1024"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      action=""
    >
      <Button icon="ios-cloud-upload-outline" style="position: absolute;left:95px;top:280px">上传头像</Button>
    </Upload>
    <Form :model="form" :label-width="100" style="position: absolute;top:60px;left: 350px">
      <FormItem label="当前密码">
        <Input v-model="form.password"></Input>
      </FormItem>
      <FormItem label="新密码">
        <Input v-model="form.newPassword"></Input>
      </FormItem>
    </Form>
    <Form :model="form" :label-width="100" style="position: absolute;top:60px;right:250px">
      <FormItem label="真实姓名">
        <Input v-model="form.userName"></Input>
      </FormItem>
      <FormItem label="专业班级">
        <Input v-model="form.major"></Input>
      </FormItem>
      <FormItem label="QQ号">
        <Input v-model="form.qq"></Input>
      </FormItem>
      <FormItem label="手机号">
        <Input v-model="form.phone"></Input>
      </FormItem>
      <FormItem label="微信号">
        <Input v-model="form.weixin"></Input>
      </FormItem>
    </Form>
    <div>
      <Button @click="verifyPassword" type="primary" style="position: absolute;top:170px;left:470px">修改密码</Button>
    </div>
    <div>
      <Button @click="verifyUserInfo" type="primary" style="position: absolute;top:350px;right:300px">修改资料</Button>
    </div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
  name: 'userinfo',
  data() {
    return {
      uploadUrl: api.upload,
      avatar: '',
      form: {
        userName: '',
        major: '',
        qq: '',
        phone: '',
        weixin: ''
      }
    }
  },
  methods: {
    handleSuccess(res, file) {
      console.log(res)
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
      this.$Message.info('verifyPassword')
    },
    verifyUserInfo() {
      this.$Message.info({
        content: 'verifyUserInfo',
        duration: 5
      })
    }
  }
}
</script>

<style>
input {
  width: 400px;
  height: 400px;
}
</style>
