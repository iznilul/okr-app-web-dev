<template>
  <Modal id="modifyModal" v-model="visible" title="修改标签信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50" :model="form">
      <form-item label="标签Id" prop="tagId">
        <Input disabled v-model="form.tagId"></Input>
      </form-item>
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
  name: 'ModifyTag',
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
    window.getTag = this.getTag
  },
  methods: {
    handleSubmit() {
      this.publicSend('modifyTag', this.form)
        .then((res) => {
          this.$emit('getTagList')
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
    getTag(tagId) {
      this.publicGetData('getTag', { param: tagId })
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

<style lang="less">
@import '../../style/util/modifyModal';
</style>
