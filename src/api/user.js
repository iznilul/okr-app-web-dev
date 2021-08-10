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

export function getUserInfoByUsername(param) {
  return axios({
    url: api.getUserInfoByUsername,
    method: 'get',
    params: param,
  })
}

export function getUserInfoByCond(data) {
  return axios({
    url: api.getUserInfoByCond,
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

export function getMonitorData(data) {
  return axios({
    url: api.getMonitorData,
    method: 'get',
    params: data,
  })
}

export function getHttpActuator(data) {
  return axios({
    url: api.getHttpActuator,
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
