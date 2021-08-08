<template>
  <Modal v-model="visible" title="验证码" @on-success="hide" @on-cancel="hide">
    <verify type="slide" @success="onVerifySuccess" @error="onVerifyError" :show-button="false"></verify>
  </Modal>
</template>

<script>
import Verify from 'vue2-verify'
export default {
  name: 'Verification',
  components: { Verify },
  data() {
    return {
      visible: false,
    }
  },

  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },

    onVerifySuccess(obj) {
      //验证码正确回调
      console.log('验证成功')
      this.$parent.submit('form')
      this.hide()
      obj.refresh()
    },

    onVerifyError(obj) {
      //验证码错误回调
      console.log('验证失败')
      this.$Notice.error({
        title: '验证失败',
        desc: '请重新验证',
      })
      //错误刷新验证码
      obj.refresh()
      this.hide()
    },
  },
}
</script>

<style scoped></style>
