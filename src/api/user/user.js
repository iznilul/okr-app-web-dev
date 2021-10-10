import axios from '@/utils/request'
import { userApi } from '@/api'

export function changeUser(data) {
  return axios({
    url: userApi.changeUser,
    method: 'post',
    data: data,
  })
}

export function queryUser() {
  return axios({
    url: userApi.queryUser,
    method: 'get',
    // params: param,
  })
}

export function queryUserByUsername(param) {
  return axios({
    url: userApi.queryUserByUsername,
    method: 'get',
    params: param,
  })
}

export function queryUserList(data) {
  return axios({
    url: userApi.queryUserList,
    method: 'post',
    data: data,
  })
}

export function changePassword(data) {
  return axios({
    url: userApi.changePassword,
    method: 'post',
    data: data,
  })
}
