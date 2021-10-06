import axios from '@/utils/request'
import { userApi } from '@/api'

export function queryKey(data) {
  return axios({
    url: userApi.queryKey,
    method: 'post',
    data: data,
  })
}

export function borrowKey(data) {
  return axios({
    url: userApi.borrowKey,
    method: 'get',
    params: data,
  })
}

export function returnKey(data) {
  return axios({
    url: userApi.returnKey,
    method: 'get',
    params: data,
  })
}
