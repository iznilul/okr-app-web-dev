<template>
  <Modal id="modifyModal" v-model="visible" title="上传博客" @on-ok="handleSubmit" @on-cancel="hidden">
    <Form ref="form" :model="form" :rules="rules">
      <form-item label="博客标题" prop="title">
        <Input v-model="form.title"></Input>
      </form-item>
      <form-item label="文件(目前只支持单文件传输)" prop="file">
        <Upload
          ref="upload"
          :format="['md']"
          :max-size="10240"
          :before-upload="handleUpload"
          :on-progress="handleProgress"
          :action="uploadUrl"
        >
          <Button icon="ios-cloud-upload-outline" type="text"> 上传md文件</Button>
        </Upload>
      </form-item>
      <form-item label="是否原创" prop="originalIsOrNot">
        <auto-input
          :param="form.originalIsOrNot"
          item="originalIsOrNot"
          placeholder="是否原创"
          dispatch="getLikeOriginal"
          @recvParam="recvParam"
        ></auto-input>
      </form-item>
      <form-item label="原博客地址(原创可不填,转载请添加)" prop="originUrl">
        <Input v-model="form.originUrl"></Input>
      </form-item>
      <form-item label="博客分类" prop="categoryName">
        <auto-input
          :param="form.categoryName"
          item="categoryName"
          placeholder="请输入博客分类"
          dispatch="getLikeCategory"
          @recvParam="recvParam"
        ></auto-input>
      </form-item>
      <form-item label="关联标签" prop="tag">
        <Tag v-for="item in form.tagList" :key="item" :name="item" closable @on-close="handleClose">{{ item }} </Tag>
        <auto-complete
          clearable
          v-model="tag"
          :data="tags"
          @on-change="handleAdd"
          placeholder="请添加标签"
        ></auto-complete>
      </form-item>
    </Form>
  </Modal>
</template>

<script>
import { baseURL } from '@/utils/request'
import { blogApi } from '@/api'
import AutoInput from '@/components/Util/AutoInput'

export default {
  name: 'AddBlog',
  components: {
    AutoInput,
  },
  data() {
    return {
      visible: false,
      uploadUrl: baseURL + blogApi.addBlog,
      tag: '',
      tags: [],
      uploadList: [],
      rules: {
        title: [
          {
            required: true,
            message: '标题不能为空',
            trigger: 'blur',
          },
        ],
        file: [
          {
            required: true,
            message: 'md文件不能为空',
            trigger: 'blur',
          },
        ],
        originalIsOrNot: [
          {
            required: true,
            message: '是否原创不能为空',
            trigger: 'blur',
          },
        ],
        categoryName: [
          {
            required: true,
            message: '分类名不能为空',
            trigger: 'blur',
          },
        ],
      },
      form: {
        title: '',
        file: null,
        originalIsOrNot: '',
        originUrl: '',
        categoryName: '',
        tagList: [],
      },
    }
  },
  mounted() {
    this.getTag()
  },
  methods: {
    getTag() {
      this.publicGetData('getLikeTag')
        .then((res) => {
          this.tags = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleUpload(file) {
      this.form.file = file
      this.$refs.upload.fileList = []
      this.$refs.upload.fileList.push(file)
      this.loadingStatus = false
      return false
    },
    handleAdd(item) {
      let result = this.judgeRepeat(item)
      if (result) {
        this.form.tagList.push(item)
      }
    },
    handleProgress() {
      this.loadingStatus = false
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
    handleValidate() {
      let bool
      this.$refs.form.validate((valid) => {
        if (valid) {
          bool = true
        } else {
          this.$Notice.error({ title: '发送失败，请输入表单必填信息' })
          bool = false
        }
      })
      return bool
    },
    handleSubmit() {
      let formData = new FormData()
      formData.append('title', this.form.title)
      formData.append('file', this.form.file)
      formData.append('originalIsOrNot', this.form.originalIsOrNot)
      formData.append('originUrl', this.form.originUrl)
      formData.append('categoryName', this.form.categoryName)
      formData.append('tagList', this.form.tagList)
      this.$store
        .dispatch('saveBlog', formData)
        .then((res) => {
          this.$emit('getBookList', {})
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
