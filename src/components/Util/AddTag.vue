<template>
  <Modal id="modifyModal" v-model="visible" title="添加标签" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="标签名" prop="name">
        <Input v-model="form.name"></Input>
      </form-item>
      <form-item label="排序权重" prop="weight">
        <Input v-model="form.weight"></Input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'AddTag',
  data() {
    return {
      visible: false,
      form: {
        name: '',
        weight: 0,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('saveTag', this.form)
        .then((res) => {
          this.$emit('getTagList', {})
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
