import axios from '@/utils/request'
import api from '@/api/index'

export function login(data) {
  return axios({
    url: api.login,
    method: 'post',
    data: data,
  })
}

export function register(data) {
  return axios({
    url: api.register,
    method: 'post',
    data: data,
  })
}

export function modifyUserInfo(data) {
  return axios({
    url: api.modifyUserInfo,
    method: 'post',
    data: data,
  })
}

export function userInfoByUsername(param) {
  return axios({
    url: api.userInfoByUsername,
    method: 'get',
    params: param,
  })
}

export function userInfoByCond(data) {
  return axios({
    url: api.userInfoByCond,
    method: 'post',
    data: data,
  })
}

export function removeByUsername(data) {
  return axios({
    url: api.removeByUsername,
    method: 'get',
    params: data,
  })
}

export function reloadAdminRoleResource(data) {
  return axios({
    url: api.reloadAdminRoleResource,
    method: 'get',
    params: data,
  })
}

export function reloadUserRoleResource(data) {
  return axios({
    url: api.reloadUserRoleResource,
    method: 'get',
    params: data,
  })
}

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

export function upload(data) {
  return axios({
    url: api.upload,
    method: 'post',
    data: data,
  })
}

export function modifyPassword(data) {
  return axios({
    url: api.modifyPassword,
    method: 'post',
    data: data,
  })
}
