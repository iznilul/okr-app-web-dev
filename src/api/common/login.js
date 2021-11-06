import axios from '@/utils/request'
import { commonApi } from '@/api'

export function login(data) {
  return axios({
    url: commonApi.login,
    method: 'post',
    data: data,
  })
}

export function fetchMenu(data) {
  return axios({
    url: commonApi.menu,
    method: 'get',
    params: data,
  })
}
