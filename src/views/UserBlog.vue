<template>
  <div id="okr">
    <Table border stripe :columns="columns" :data="data"></Table>
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
import columns from '../config/UserBlogColumn'
export default {
  name: 'userBlog',
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
    this.getUserBlogList()
  },
  methods: {
    getUserBlogList() {
      this.publicGetForm('getUserBlogList')
    },

    changePage(index) {
      this.publicChangePage(index, this.getBlogList)
    },

    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getBlogList)
    },
  },
}
</script>

<style lang="scss">
@import '../style/global/table';
@import '../style/global/page';
</style>
