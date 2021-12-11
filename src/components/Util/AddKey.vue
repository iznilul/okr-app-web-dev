<template>
  <Modal id="modifyModal" v-model="visible" title="添加钥匙" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="钥匙名" prop="keyName">
        <Input v-model="form.keyName"></Input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'AddKey',
  data() {
    return {
      visible: false,
      form: {
        keyName: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('saveKey', this.form)
        .then((res) => {
          // console.log(res)
          this.$emit('getKeyList', {})
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
