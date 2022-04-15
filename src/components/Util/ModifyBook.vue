<template>
  <Modal id="modifyModal" v-model="visible" title="修改书籍信息" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :model="form">
      <form-item label="书籍Id" prop="bookId">
        <Input disabled v-model="form.bookId"></Input>
      </form-item>
      <form-item label="书名" prop="bookName">
        <Input v-model="form.bookName"></Input>
      </form-item>
      <form-item label="出版社" prop="publisher">
        <Input v-model="form.publisher"></Input>
      </form-item>
      <form-item label="封面" prop="img">
        <Avatar id="avatar" :src="form.img" shape="square" icon="ios-person" />
        <Upload
          :headers="uploadHeader"
          :format="['jpg', 'jpeg', 'png']"
          :data="{ bookId: form.bookId }"
          :max-size="1024"
          :on-success="handleSuccess"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :action="uploadUrl"
          :show-upload-list="false"
        >
          <Button id="upload" icon="ios-cloud-upload-outline">上传头像</Button>
        </Upload></form-item
      >
      <form-item label="关联标签" prop="tag">
        <Tag v-for="item in form.tagList" :key="item" :name="item" closable @on-close="handleClose">{{ item }}</Tag>
        <auto-complete
          clearable
          v-model="tag"
          :data="tags"
          @on-change="handleAdd"
          placeholder="请添加标签"
        ></auto-complete>
      </form-item>
      <form-item label="状态" prop="statusName">
        <auto-input
          :param="form.statusName"
          item="statusName"
          placeholder="请输入查询状态名"
          dispatch="getLikeBook"
          @recvParam="recvParam"
        ></auto-input>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import AutoInput from './AutoInput'
import { baseURL } from '../../utils/request'
import { bookApi } from '../../api'

export default {
  name: 'ModifyBook',
  components: { AutoInput },
  data() {
    return {
      visible: false,
      uploadUrl: baseURL + bookApi.changeBookImg,
      uploadHeader: {
        Authorization: localStorage.getItem('token'),
      },
      tag: '',
      tags: [],
      form: {
        bookId: '',
        bookName: '',
        publisher: '',
        img: '',
        tagList: [],
        statusName: '',
      },
    }
  },
  mounted() {
    this.getTag()
    window.getBook = this.getBook
  },
  methods: {
    handleAdd(item) {
      let result = this.judgeRepeat(item)
      if (result) {
        this.form.tagList.push(item)
      }
    },
    judgeRepeat(item) {
      let flag = true
      this.form.tagList.forEach((tag) => {
        if (tag === item) {
          this.$Notice.error({
            desc: '不要添加重复的标签( ╯□╰ )',
          })
          flag = false
        }
      })
      return flag
    },
    handleClose(event, name) {
      const index = this.form.tagList.indexOf(name)
      this.form.tagList.splice(index, 1)
    },
    recvParam(item, val) {
      this.form[item] = val
    },
    getTag() {
      this.publicGetData('getLikeTag')
        .then((res) => {
          this.tags = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleSuccess(res) {
      this.$Notice.info({
        title: '操作成功',
      })
    },
    handleFormatError(file) {
      this.$Notice.error({
        desc: file.name + ' 文件格式不符合要求，请选择jpg或png格式文件',
      })
    },
    handleMaxSize(file) {
      this.$Notice.error({
        desc: file.name + '太大了， 请上传1M以内的文件.',
      })
    },
    handleSubmit() {
      this.publicSend('modifyBook', this.form)
        .then((res) => {
          this.$emit('getBookList')
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
    getBook(bookId) {
      this.publicGetData('getBook', { bookId: bookId })
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
