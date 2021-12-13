<template>
  <Modal id="modifyModal" v-model="visible" title="添加书籍" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :lable-width="50">
      <form-item label="书名" prop="bookName">
        <Input v-model="bookName"></Input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
export default {
  name: 'AddBook',
  data() {
    return {
      visible: false,
      bookName: '',
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch('saveBook', { param: this.bookName })
        .then((res) => {
          this.$emit('getBookList', {})
          this.bookName = ''
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
