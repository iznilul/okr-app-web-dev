<template>
  <div id="okr">
    <Button id="button" @click="showBlogModal('addBlog')" type="primary">添加博客</Button>
    <!--      <Button @click="redirect" type="primary">跳转</Button>-->
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-blog ref="addBlog" @getBlogList="getBlogList"></add-blog>
    <modify-blog ref="modifyBlog" @getBlogList="getBlogList"></modify-blog>
    <Page
      id="page"
      :total="dataCount"
      :page-size="form.pageSize"
      :current="current"
      show-total
      class="paging"
      show-sizer
      @on-change="changePage"
      @on-page-size-change="changePageSize"
    ></Page>
  </div>
</template>

<script>
import columns from '../config/blogColumn'
import ModifyBlog from '../components/Util/ModifyBlog'
import AddBlog from '@/components/Util/AddBlog'
export default {
  name: 'blog',
  components: { ModifyBlog, AddBlog },
  data() {
    return {
      columns: columns,
      data: [],
      dataCount: 0,
      current: 1,
      form: {
        index: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getBlogList()
    window.showBlogModal = this.showBlogModal
    window.removeBlog = this.removeBlog
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'blog',
        params: {
          blogId: 1,
        },
      })
    },
    getBlogList() {
      this.publicGetForm('getBlogList')
    },

    getBlogList() {
      this.publicGetForm('getBlogList')
    },

    removeBlog(blogId) {
      this.publicRemoveData('removeBlog', { blogId: blogId }, this.getBlogList)
    },

    borrowBlog(blogId) {
      this.publicSend('borrowBlog', { blogId: blogId })
        .then((res) => {
          console.log(blogId)
          this.getBlogList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    returnBlog(blogId) {
      this.publicSend('returnBlog', { blogId: blogId })
        .then((res) => {
          this.getBlogList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.publicChangePage(index, this.getBlogList)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getBlogList)
    },

    showBlogModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/okr';
@import '../style/global/table';
@import '../style/global/page';
</style>
n
