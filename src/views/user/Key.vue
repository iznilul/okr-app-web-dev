<template>
  <div id="key">
    <Button id="button" @click="showAddKey" type="primary">添加钥匙</Button>
    <Table stripe id="table" :columns="columns" :data="data" height="450" width="1300"></Table>
    <add-key ref="addKey" @getKey="getKey"></add-key>
    <modify-key ref="modifyKey" @getKey="getKey"></modify-key>
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
import columns from '../../config/KeyColumn'
import ModifyKey from '../../components/util/ModifyKey'
import AddKey from '../../components/util/AddKey'
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
    this.getKey()
    window.showModifyKey = this.showModifyKey
    window.getKeyById = this.getKeyById
    window.removeKey = this.removeKey
    window.borrowKey = this.borrowKey
    window.returnKey = this.returnKey
  },
  methods: {
    getKey() {
      this.$store
        .dispatch('getKey', this.form)
        .then((res) => {
          console.log(res)
          this.pageReset(res.current)
          this.dataCount = res.total
          this.data = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    removeKey(keyId) {
      this.$store
        .dispatch('removeKey', { keyId: keyId })
        .then((res) => {
          // console.log(res)
          this.data.forEach((key) => {
            if (key.keyId === keyId) {
              console.log(key.keyId)
              let index = this.data.indexOf(key)
              this.data.splice(index, 1)
            }
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    borrowKey(keyId) {
      this.$store
        .dispatch('borrowKey', { keyId: keyId })
        .then((res) => {
          console.log(res)
          this.getKey()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    returnKey(keyId) {
      this.$store
        .dispatch('returnKey', { keyId: keyId })
        .then((res) => {
          console.log(res)
          this.getKey()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.form.index = index
      this.current = index
      this.getKey(this.form)
    },

    changePageSize(pageSize) {
      // console.log(pageSize)
      this.current = 1
      this.form.index = 1
      this.form.pageSize = pageSize
      this.getKey()
    },

    pageReset(current) {
      this.current = current
      this.form.index = current
    },

    showModifyKey() {
      this.$refs.modifyKey.show()
    },
    showAddKey() {
      this.$refs.addKey.show()
    },
    getKeyById(item) {
      // console.log(item)
      this.$refs.modifyKey.getKeyById(item)
    },
  },
}
</script>

<style lang="less">
@import '../../style/views/user/Key';
</style>
