<template>
  <div id="book">
    <Button id="button" @click="showBookModal('addBook')" type="primary">添加书籍</Button>
    <Table border stripe :columns="columns" :data="data"></Table>
    <add-book ref="addBook" @getBookList="getBookList"></add-book>
    <modify-book ref="modifyBook" @getBookList="getBookList"></modify-book>
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
import AddBook from '../components/Util/AddBook'
export default {
  name: 'book',
  components: { ModifyBook, AddBook },
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
@import '../style/views/book';
@import "../style/global/table";
@import "../style/global/page";
</style>
