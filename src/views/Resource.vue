<template>
  <div id="resource">
    <div class="query">
      <Form id="form" ref="form" :model="form" :label-width="80" @keyup.enter.native="getResource">
        <FormItem label="接口名" prop="name">
          <Input v-model="form.name"></Input>
        </FormItem>
      </Form>
    </div>
    <Button id="button" @click="getResource" type="primary">查询</Button>
    <Reset @reset="reset"></Reset>
    <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
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
import columns from '../config/ResourceColumn'
import AutoInput from '../components/Util/AutoInput'
import Reset from '../components/Util/Reset'
export default {
  name: 'key',
  components: { AutoInput, Reset },
  data() {
    return {
      columns: columns,
      data: [],
      dataCount: 0,
      current: 1,
      form: {
        name: '',
        index: 1,
        pageSize: 10,
      },
    }
  },
  mounted() {
    this.getResource()
    window.updateResource = this.updateResource
  },
  methods: {
    reset() {
      this.publicResetForm('form')
      this.getResource()
    },
    getResource() {
      this.publicGetForm('getResource')
    },

    updateResource(resourceId) {
      this.publicSend('updateResource', { resourceId: resourceId })
        .then((res) => {
          this.getResource()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.publicChangePage(index, this.getResource)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getResource)
    },

    showModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="less">
@import '../style/views/resource';
</style>
