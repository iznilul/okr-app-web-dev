import axios from '@/utils/request'
import { commonApi } from '@/api'

export function login(data) {
  return axios({
    url: commonApi.login,
    method: 'post',
    data: data,
  })
}

export function fetchRoute(data) {
  return axios({
    url: commonApi.route,
    method: 'get',
    params: data,
  })
}
