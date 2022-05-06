<template>
  <div id="blog">
    <Button id="back" type="primary" @click="back">返回</Button>
    <Card id="content" shadow="true">
      <div slot="title">
        <p>{{ this.form.title }}</p>
      </div>
      <div id="message">
        <span>作者:{{ this.form.name }}</span>
        <Divider type="vertical" />
        <span>分类:{{ this.form.categoryName }}</span>
        <hr />
        <Tag :color="map[form.status]">{{ form.statusName }} </Tag>
      </div>
      <div class="tags">
        <Tag v-for="item in form.tagList" :key="item" :name="item">{{ item }} </Tag>
      </div>
      <Divider />
      <div id="preview"></div>
      <Divider />
      <div id="comment">
        <h2>评语</h2>
        <Input disabled v-model="form.comment" type="textarea"></Input>
      </div>
    </Card>
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'

export default {
  name: 'blog',
  data() {
    return {
      blogId: null,
      map: {
        0: 'default',
        1: 'error',
        2: 'warning',
        3: 'primary',
        4: 'success',
      },
      form: {
        blogId: '',
        title: '',
        content: '',
        name: '',
        tagList: [],
        comment: '',
        categoryName: '',
        statusName: '',
        status: null,
      },
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    console.log(this.blogId)
  },
  mounted() {
    this.getBlog()
  },
  methods: {
    back() {
      this.$router.push('/blog/bloglist')
    },
    getBlog() {
      this.publicGetData('getBlog', { blogId: this.blogId })
        .then((res) => {
          this.form = res
          this.renderMarkdown(this.form.content)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    renderMarkdown(md) {
      Vditor.preview(document.getElementById('preview'), md, {
        hljs: { style: 'github' },
      })
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/blog';
</style>
