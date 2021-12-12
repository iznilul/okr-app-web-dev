<template>
  <Modal id="modifyModal" v-model="visible" title="更新报名信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="学号" prop="studentId">
        <Input disabled v-model="form.studentId"></Input>
      </form-item>
      <form-item label="姓名" prop="name">
        <Input disabled v-model="form.name"></Input>
      </form-item>
      <form-item label="性别" prop="gender">
        <Input disabled v-model="form.gender"></Input>
      </form-item>
      <form-item label="qq号" prop="qq">
        <Input disabled v-model="form.qq"></Input>
      </form-item>
      <form-item label="专业班级" prop="major">
        <Input disabled v-model="form.major"></Input>
      </form-item>
      <form-item label="自我介绍" prop="profile">
        <Input disabled :rows="5" type="textarea" v-model="form.profile" size="large"></Input>
      </form-item>
      <form-item label="录取状态" prop="statusName">
        <auto-input
          :param="form.statusName"
          item="statusName"
          placeholder="请输入查询录取状态"
          dispatch="getLikeSignUpStatus"
          @recvParam="recvParam"
        >
        </auto-input>
      </form-item>
      <form-item label="评价" prop="comment">
        <Input :rows="3" type="textarea" v-model="form.comment" size="large"></Input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import AutoInput from '../../components/Util/AutoInput'
export default {
  name: 'ModifySignUp',
  components: {
    AutoInput,
  },
  data() {
    return {
      visible: false,
      form: {
        studentId: '',
        name: '',
        gender: '',
        qq: '',
        major: '',
        profile: '',
        statusName: '',
        comment: '',
      },
    }
  },
  mounted() {
    window.getSignUp = this.getSignUpList
  },
  methods: {
    recvParam(item, val) {
      this.form[item] = val
    },
    getSignUpList(studentId) {
      this.publicGetData('getSignUp', { studentId: studentId })
        .then((res) => {
          this.form = res
        })
        .catch((error) => {
          console.log(error)
        })
    },

    handleSubmit() {
      this.publicSend('modifySignup', this.form)
        .then((res) => {
          this.$emit('getSignUpList', {})
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
