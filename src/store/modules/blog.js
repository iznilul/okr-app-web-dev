import {
  queryBlog,
  queryBlogList,
  cancelBlog,
  addBlog,
  changeBlog,
} from '@/api/blog'
const blog = {
  state: {},

  mutations: {},

  actions: {
    getBlog({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryBlog(data)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    modifyBlog({ commit }, data) {
      return new Promise((resolve, reject) => {
        changeBlog(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    saveBlog({ commit }, data) {
      return new Promise((resolve, reject) => {
        addBlog(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    removeBlog({ commit }, data) {
      return new Promise((resolve, reject) => {
        cancelBlog(data)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getBlogList({ commit }, data) {
      return new Promise((resolve, reject) => {
        queryBlogList(data)
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
export default blog
