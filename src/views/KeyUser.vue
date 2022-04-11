<template>
  <div id="keyUser">
    <Table border stripe :columns="columns" :data="data"></Table>
    <Page
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
import columns from '../config/keyUserColumn'
export default {
  name: 'keyUser',
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
    this.getKeyUser()
  },
  methods: {
    getKeyUser() {
      this.publicGetForm('getKeyUser')
    },
    changePage(index) {
      this.publicChangePage(index, this.getKeyUser)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getKeyUser)
    },
  },
}
</script>

<style lang="scss">
@import '../style/global/page';
@import '../style/global/table';
</style>
