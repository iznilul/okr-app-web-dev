import axios from '@/utils/request'
import { keyApi } from '@/api/index'

export function queryKeyById(data) {
  return axios({
    url: keyApi.queryKeyById,
    method: 'get',
    params: data,
  })
}

export function changeKey(data) {
  return axios({
    url: keyApi.changeKey,
    method: 'post',
    data: data,
  })
}

export function addKey(data) {
  return axios({
    url: keyApi.addKey,
    method: 'get',
    params: data,
  })
}

export function cancelKey(data) {
  return axios({
    url: keyApi.cancelKey,
    method: 'get',
    params: data,
  })
}

export function queryKey(data) {
  return axios({
    url: keyApi.queryKey,
    method: 'post',
    data: data,
  })
}

export function queryKeyUser(data) {
  return axios({
    url: keyApi.queryKeyUser,
    method: 'post',
    data: data,
  })
}

export function borrowKey(data) {
  return axios({
    url: keyApi.borrowKey,
    method: 'get',
    params: data,
  })
}

export function returnKey(data) {
  return axios({
    url: keyApi.returnKey,
    method: 'get',
    params: data,
  })
}
