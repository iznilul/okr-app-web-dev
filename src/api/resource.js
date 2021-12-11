import axios from '@/utils/request'
import { resourceApi } from './index'

export function changeResource(data) {
  return axios({
    url: resourceApi.changeResource,
    method: 'get',
    params: data,
  })
}

export function queryResource(data) {
  return axios({
    url: resourceApi.queryResource,
    method: 'post',
    data: data,
  })
}

export function queryResourceName(data) {
  return axios({
    url: resourceApi.queryResourceName,
    method: 'get',
    params: data,
  })
}
