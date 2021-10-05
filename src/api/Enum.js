import axios from '@/utils/request'
import api from '@/api/Index'

export function getLikeUsername(param) {
  return axios({
    url: api.getLikeUsername,
    method: 'get',
    params: param,
  })
}
export function getLikeName(param) {
  return axios({
    url: api.getLikeName,
    method: 'get',
    params: param,
  })
}
export function getLikeMajor(param) {
  return axios({
    url: api.getLikeMajor,
    method: 'get',
    params: param,
  })
}
