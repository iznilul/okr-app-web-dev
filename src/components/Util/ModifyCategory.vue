<template>
  <Modal id="modifyModal" v-model="visible" title="修改分类信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :model="form">
      <form-item label="分类Id" prop="tagId">
        <Input disabled v-model="form.tagId"></Input>
      </form-item>
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
  name: 'ModifyCategory',
  data() {
    return {
      visible: false,
      form: {
        tagId: '',
        name: '',
        weight: 0,
      },
    }
  },
  mounted() {
    window.getCategory = this.getCategory
  },
  methods: {
    handleSubmit() {
      this.publicSend('modifyCategory', this.form)
        .then((res) => {
          this.$emit('getCategoryList')
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
    getCategory(tagId) {
      this.publicGetData('getCategory', { param: tagId })
        .then((res) => {
          this.form = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
@import '../../style/util/modifyModal';
</style>
