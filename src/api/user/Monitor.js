import axios from '@/utils/request'
import { userApi } from '@/api'

export function server(data) {
  return axios({
    url: userApi.server,
    method: 'get',
    params: data,
  })
}

export function httpActuator(data) {
  return axios({
    url: userApi.httpActuator,
    method: 'get',
    params: data,
  })
}
