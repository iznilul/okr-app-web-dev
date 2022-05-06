<template>
  <div id="blog">
    <Button id="button" @click="showBlogModal('addBlog')" type="primary">添加博客</Button>
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-blog ref="addBlog" :tag-list="tagList" @getBlogList="getBlogList"></add-blog>
    <modify-blog ref="modifyBlog" :tag-list="tagList" @getBlogList="getBlogList"></modify-blog>
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
      tagList: [],
      dataCount: 0,
      current: 1,
      form: {
        index: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getTag()
    this.getBlogList()
    window.redirectToBlog = this.redirectToBlog
    window.showBlogModal = this.showBlogModal
    window.removeBlog = this.removeBlog
  },
  methods: {
    getTag() {
      this.publicGetData('getLikeTag')
        .then((res) => {
          this.tagList = res
        })
        .catch((error) => {
          console.log(error)
        })
    },
    redirectToBlog(blogId) {
      this.$router.push({
        name: 'blog',
        params: {
          blogId: blogId,
        },
      })
    },
    getBlogList() {
      this.publicGetForm('getBlogList')
    },

    removeBlog(blogId) {
      this.publicRemoveData('removeBlog', { blogId: blogId }, this.getBlogList)
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
@import '../style/views/blogList';
@import '../style/global/table';
@import '../style/global/page';
</style>
