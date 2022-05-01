import axios from '@/utils/request'
import { blogApi } from '@/api/index'

export function queryBlog(data) {
  return axios({
    url: blogApi.queryBlog,
    method: 'get',
    params: data,
  })
}

export function changeBlog(data) {
  return axios({
    url: blogApi.changeBlog,
    method: 'post',
    data: data,
  })
}

export function addBlog(data) {
  return axios({
    url: blogApi.addBlog,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export function cancelBlog(data) {
  return axios({
    url: blogApi.cancelBlog,
    method: 'get',
    params: data,
  })
}

export function queryBlogList(data) {
  return axios({
    url: blogApi.queryList,
    method: 'post',
    data: data,
  })
}
