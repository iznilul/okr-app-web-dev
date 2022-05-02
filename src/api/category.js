import axios from '@/utils/request'
import { categoryApi } from '@/api/index'

export function queryCategory(data) {
  return axios({
    url: categoryApi.queryCategory,
    method: 'get',
    params: data,
  })
}
export function queryCategoryList(data) {
  return axios({
    url: categoryApi.queryCategoryList,
    method: 'post',
    data: data,
  })
}

export function changeCategory(data) {
  return axios({
    url: categoryApi.changeCategory,
    method: 'post',
    data: data,
  })
}

export function addCategory(data) {
  return axios({
    url: categoryApi.addCategory,
    method: 'post',
    data: data,
  })
}

export function cancelCategory(data) {
  return axios({
    url: categoryApi.cancelCategory,
    method: 'get',
    params: data,
  })
}
