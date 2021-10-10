import axios from '@/utils/request'
import { adminApi } from '@/api'

export function queryKeyById(data) {
  return axios({
    url: adminApi.queryKeyById,
    method: 'get',
    params: data,
  })
}

export function changeKey(data) {
  return axios({
    url: adminApi.changeKey,
    method: 'post',
    data: data,
  })
}

export function addKey(data) {
  return axios({
    url: adminApi.addKey,
    method: 'get',
    params: data,
  })
}

export function cancelKey(data) {
  return axios({
    url: adminApi.cancelKey,
    method: 'get',
    params: data,
  })
}
