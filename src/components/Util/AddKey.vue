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
          this.$Notice.success({
            desc: '添加成功',
          })
          this.$emit('getKeyList', {})
        })
        .catch((error) => {
          console.log(error)
          this.$Notice.error({
            desc: '添加失败',
          })
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
