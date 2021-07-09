import axios from '@/utils/request'
import api from '@/api/index'

export function login(data) {
  return axios({
    url: api.login,
    method: 'post',
    data: data
  })
}

export function register(data) {
  return axios({
    url: api.register,
    method: 'post',
    data: data
  })
}

export function updateUser(data) {
  return axios({
    url: api.updateUser,
    method: 'post',
    data: data
  })
}

export function selectUser(param) {
  return axios({
    url: api.selectUser,
    method: 'get',
    params: param
  })
}

export function selectByCond(data) {
  return axios({
    url: api.selectByCond,
    method: 'post',
    data: data
  })
}

export function upload(data) {
  return axios({
    url: api.upload,
    method: 'post',
    data: data
  })
}

export function verifyPassword(data) {
  return axios({
    url: api.verifyPassword,
    method: 'post',
    data: data
  })
}
