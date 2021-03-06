import axios from '@/utils/request'
import { userApi } from '@/api/index'

export function addUser(data) {
  return axios({
    url: userApi.addUser,
    method: 'post',
    data: data,
  })
}

export function cancelUser(data) {
  return axios({
    url: userApi.cancelUser,
    method: 'get',
    params: data,
  })
}

export function changeUser(data) {
  return axios({
    url: userApi.changeUser,
    method: 'post',
    data: data,
  })
}

export function changeUserRole(data) {
  return axios({
    url: userApi.changeUserRole,
    method: 'post',
    data: data,
  })
}

export function queryUser(param) {
  return axios({
    url: userApi.queryUser,
    method: 'get',
    params: param,
  })
}

export function queryUserRole(param) {
  return axios({
    url: userApi.queryUserRole,
    method: 'get',
    params: param,
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
