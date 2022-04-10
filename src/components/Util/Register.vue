<template>
  <div id="register">
    <Button
      @click="() => (this.visible = true)"
      type="primary"
      :disabled="disabled"
      style="color: rgba(65, 60, 67, 0.77)"
    >
      注册新用户
    </Button>
    <Modal
      id="registerModal"
      v-model="visible"
      title="注册新用户"
      @on-ok="handleSubmit"
      @on-cancel="() => (this.visible = false)"
    >
      <Form ref="form" :model="form" :rules="rules">
        <form-item label="账号" prop="username">
          <Input v-model="form.username" placeholder="新用户的初始密码为账号"></Input>
        </form-item>
        <form-item label="身份" prop="name">
          <Select v-model="form.name">
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
      data: [],
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
  computed: {
    type() {
      return this.$store.getters.type
    },
    disabled() {
      return this.$store.getters.disabled
    },
  },
  methods: {
    getUserList() {
      this.$emit('getUserList', {})
    },
    handleSubmit() {
      let valid = this.publicValidate()
      if (valid) {
        this.publicSend('register', this.form, 'getUserList')
          .then((res) => {
            console.log(res)
            this.getUserList()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../style/util/register';
</style>
