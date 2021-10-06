import axios from '@/utils/request'
import { userApi } from '@/api'

export function queryLikeUsername(param) {
  return axios({
    url: userApi.queryLikeUsername,
    method: 'get',
    params: param,
  })
}
export function queryLikeName(param) {
  return axios({
    url: userApi.queryLikeName,
    method: 'get',
    params: param,
  })
}
export function queryLikeMajor(param) {
  return axios({
    url: userApi.queryLikeMajor,
    method: 'get',
    params: param,
  })
}
