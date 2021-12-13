<template>
  <div id="tag">
    <Button id="button" @click="showTagModal('addTag')" type="primary">添加标签</Button>
    <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
    <add-tag ref="addTag" @getTagList="getTagList"></add-tag>
    <modify-tag ref="modifyTag" @getTagList="getTagList"></modify-tag>
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
import columns from '../config/tagColumn'
import AddTag from '../components/Util/AddTag'
import ModifyTag from '../components/Util/ModifyTag'
export default {
  name: 'tag',
  components: {
    AddTag,
    ModifyTag,
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
    this.getTagList()
    window.showTagModal = this.showTagModal
    window.removeTag = this.removeTag
  },
  methods: {
    getTagList() {
      this.publicGetForm('getTagList')
    },

    removeTag(tagId) {
      this.publicRemoveData('removeTag', { tagId: tagId }, this.getTagList)
    },

    changePage(index) {
      this.publicChangePage(index, this.getTagList)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getTagList)
    },

    showTagModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="less">
@import '../style/views/tag';
</style>
