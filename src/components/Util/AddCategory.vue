<template>
  <Modal id="modifyModal" v-model="visible" title="添加分类" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :model="form">
      <form-item label="分类名" prop="name">
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
  name: 'AddCategory',
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
        .dispatch('saveCategory', this.form)
        .then((res) => {
          this.$emit('getCategoryList', {})
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

<style lang="scss">
@import '../../style/util/modifyModal';
</style>
