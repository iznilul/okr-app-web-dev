import axios from '@/utils/request'
import { bookApi } from '@/api/index'

export function queryBook(data) {
  return axios({
    url: bookApi.queryBook,
    method: 'get',
    params: data,
  })
}

export function changeBook(data) {
  return axios({
    url: bookApi.changeBook,
    method: 'post',
    data: data,
  })
}

export function addBook(data) {
  return axios({
    url: bookApi.addBook,
    method: 'get',
    params: data,
  })
}

export function cancelBook(data) {
  return axios({
    url: bookApi.cancelBook,
    method: 'get',
    params: data,
  })
}

export function queryBookList(data) {
  return axios({
    url: bookApi.queryList,
    method: 'post',
    data: data,
  })
}

export function queryBookUser(data) {
  return axios({
    url: bookApi.queryBookUser,
    method: 'post',
    data: data,
  })
}

export function borrowBook(data) {
  return axios({
    url: bookApi.borrowBook,
    method: 'get',
    params: data,
  })
}

export function returnBook(data) {
  return axios({
    url: bookApi.returnBook,
    method: 'get',
    params: data,
  })
}
