import {
  queryBook,
  queryBookList,
  cancelBook,
  addBook,
  changeBook,
  borrowBook,
  returnBook,
  queryBookUser,
} from '@/api/book'
const book = {
  state: {},

  mutations: {},

  actions: {
    getBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryBook(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    modifyBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeBook(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    saveBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        addBook(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    removeBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        cancelBook(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getBookList({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryBookList(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getBookUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryBookUser(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    borrowBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        borrowBook(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    returnBook({ commit }, data) {
      return new Promise((resolve, reject) => {
        returnBook(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
export default book
