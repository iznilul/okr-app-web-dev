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
