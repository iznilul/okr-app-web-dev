import axios from '@/utils/request'
import { tagApi } from '@/api/index'

export function queryTag(data) {
  return axios({
    url: tagApi.queryTag,
    method: 'get',
    params: data,
  })
}
export function queryTagList(data) {
  return axios({
    url: tagApi.queryTagList,
    method: 'post',
    data: data,
  })
}

export function changeTag(data) {
  return axios({
    url: tagApi.changeTag,
    method: 'post',
    data: data,
  })
}

export function addTag(data) {
  return axios({
    url: tagApi.addTag,
    method: 'post',
    data: data,
  })
}

export function cancelTag(data) {
  return axios({
    url: tagApi.cancelTag,
    method: 'get',
    params: data,
  })
}
