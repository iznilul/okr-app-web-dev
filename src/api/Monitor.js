import axios from '@/utils/request'
import api from '@/api/Index'

export function monitorData(data) {
  return axios({
    url: api.monitorData,
    method: 'get',
    params: data,
  })
}

export function httpActuator(data) {
  return axios({
    url: api.httpActuator,
    method: 'get',
    params: data,
  })
}
