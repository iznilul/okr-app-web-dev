import axios from '@/utils/request'
import { enumApi } from '@/api/index'

export function enumUsername(param) {
  return axios({
    url: enumApi.enumUsername,
    method: 'get',
    params: param,
  })
}
export function enumName(param) {
  return axios({
    url: enumApi.enumName,
    method: 'get',
    params: param,
  })
}
export function enumMajor(param) {
  return axios({
    url: enumApi.enumMajor,
    method: 'get',
    params: param,
  })
}
export function enumKey(param) {
  return axios({
    url: enumApi.enumKey,
    method: 'get',
    params: param,
  })
}
