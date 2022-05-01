<template>
  <div id="okr">
    <Button id="button" @click="showBookModal('addBlog')" type="primary">添加博客</Button>
      <Button @click="redirect" type="primary">跳转</Button>
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-blog ref="addBlog" @getBookList="getBookList"></add-blog>
<!--    <modify-book ref="modifyBook" @getBookList="getBookList"></modify-book>-->
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
import columns from '../config/bookColumn'
import ModifyBook from '../components/Util/ModifyBook'
import AddBlog from '@/components/Util/AddBlog'
export default {
  name: 'blog',
  components: { ModifyBook, AddBlog },
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
    this.getBookList()
    window.showBookModal = this.showBookModal
    window.removeBook = this.removeBook
    window.borrowBook = this.borrowBook
    window.returnBook = this.returnBook
  },
  methods: {
      redirect(){
         this.$router.push({
             name:"blog",
             params:{
                 blogId:1
             }
         })
      },
    getBookList() {
      this.publicGetForm('getBookList')
    },

    removeBook(bookId) {
      this.publicRemoveData('removeBook', { bookId: bookId }, this.getBookList)
    },

    borrowBook(bookId) {
      this.publicSend('borrowBook', { bookId: bookId })
        .then((res) => {
          console.log(bookId)
          this.getBookList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    returnBook(bookId) {
      this.publicSend('returnBook', { bookId: bookId })
        .then((res) => {
          this.getBookList()
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changePage(index) {
      this.publicChangePage(index, this.getBookList)
    },
    changePageSize(pageSize) {
      this.publicChangePageSize(pageSize, this.getBookList)
    },

    showBookModal(ref) {
      this.publicShowModal(ref)
    },
  },
}
</script>

<style lang="scss">
@import '../style/views/okr';
@import '../style/global/table';
@import '../style/global/page';
</style>n
