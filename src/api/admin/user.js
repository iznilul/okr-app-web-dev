import axios from '@/utils/request'
import { adminApi } from '@/api'

export function addUser(data) {
  return axios({
    url: adminApi.addUser,
    method: 'post',
    data: data,
  })
}

export function cancelUser(data) {
  return axios({
    url: adminApi.cancelUser,
    method: 'get',
    params: data,
  })
}
