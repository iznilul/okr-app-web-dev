<template>
  <div id="category">
    <Button id="button" @click="showCategoryModal('addCategory')" type="primary">添加分类</Button>
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-category ref="addCategory" @getCategoryList="getCategoryList"></add-category>
    <modify-category ref="modifyCategory" @getCategoryList="getCategoryList"></modify-category>
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
import columns from '../config/categoryColumn'
import AddCategory from '../components/Util/AddCategory'
import ModifyCategory from '../components/Util/ModifyCategory'
export default {
  name: 'category',
  components: {
    AddCategory,
    ModifyCategory,
  },
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
    this.getCategoryList()
    window.showCategoryModal = this.showCategoryModal
    window.removeCategory = this.removeCategory
  },
  methods: {
    getCategoryList() {
      this.publicGetForm('getCategoryList')
    },

    removeCategory(categoryId) {
      this.publicRemoveData('removeCategory', { categoryId: categoryId }, this.getCategoryList)
    },

    changePage(index) {
      this.publicChangePage(index, this.getCategoryList)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getCategoryList)
    },

    showCategoryModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/category';
@import '../style/global/page';
@import '../style/global/table';
</style>
