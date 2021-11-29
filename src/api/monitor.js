import axios from '@/utils/request'
import { monitorApi } from '@/api/index'

export function server(data) {
  return axios({
    url: monitorApi.server,
    method: 'get',
    params: data,
  })
}

export function httpActuator(data) {
  return axios({
    url: monitorApi.httpActuator,
    method: 'get',
    params: data,
  })
}
