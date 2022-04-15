<template>
  <div id="key">
    <Button id="button" @click="showModal('addKey')" type="primary">添加钥匙</Button>
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-key ref="addKey" @getKeyList="getKeyList"></add-key>
    <modify-key ref="modifyKey" @getKeyList="getKeyList"></modify-key>
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
import columns from '../config/keyColumn'
import ModifyKey from '../components/Util/ModifyKey'
import AddKey from '../components/Util/AddKey'
export default {
  name: 'key',
  components: { ModifyKey, AddKey },
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
    this.getKeyList()
    window.showKeyModal = this.showKeyModal
    window.removeKey = this.removeKey
    window.borrowKey = this.borrowKey
    window.returnKey = this.returnKey
  },
  methods: {
    getKeyList() {
      this.publicGetForm('getKeyList')
    },

    removeKey(keyId) {
      this.publicRemoveData('removeKey', { keyId: keyId }, this.getKeyList)
    },

    borrowKey(keyId) {
      this.publicSend('borrowKey', { keyId: keyId })
        .then((res) => {
          console.log(keyId)
          this.getKeyList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    returnKey(keyId) {
      this.publicSend('returnKey', { keyId: keyId })
        .then((res) => {
          this.getKeyList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.publicChangePage(index, this.getKeyUser)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getKeyUser)
    },

    showKeyModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/key';
@import '../style/global/page';
@import '../style/global/table';
</style>
