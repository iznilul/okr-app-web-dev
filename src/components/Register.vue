<template>
  <div>
    <Button @click="visible = true" type="primary" style="position: absolute; left: 800px">注册新用户</Button>
    <Modal v-model="visible" title="注册新用户" @on-ok="handleSubmit('form')" @on-cancel="cancel">
      <Form ref="form" :lable-width="50" :model="form" :rules="rules">
        <form-item label="账号" prop="username">
          <Input v-model="form.username" placeholder="新用户的初始密码为账号" style="width: 200px"></Input>
        </form-item>
        <form-item label="身份" prop="role">
          <Select v-model="form.name" style="width: 100px">
            <Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </form-item>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data() {
    return {
      visible: false,
      roleList: [
        {
          value: '管理员',
          label: '管理员',
        },
        {
          value: '普通用户',
          label: '普通用户',
        },
      ],
      rules: {
        //判空规则
        username: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'blur',
          },
        ],
        name: [
          {
            required: true,
            message: '身份不能为空',
            trigger: 'blur',
          },
        ],
      },
      form: {
        username: '',
        name: '',
      },
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch('Register', this.form)
            .then((res) => {
              console.log(res)
              this.$Notice.info({
                desc: res.data,
              })
              this.$emit('getUserInfoByCond', {})
            })
            .catch((error) => {
              console.log(error)
              this.$Notice.error({
                desc: '注册失败',
              })
            })
        } else {
          this.$Message.error('注册失败,请按照正确的格式注册!')
        }
      })
    },
    cancel() {
      this.visible = false
    },
  },
}
</script>

<style scoped></style>
