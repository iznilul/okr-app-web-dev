import axios from '@/utils/request'
import api from '@/api/index'

export function login(parameter) {
  return axios({
    url: api.login,
    method: 'post',
    data: parameter,
  })
}

export function register(parameter) {
  return axios({
    url: api.register,
    method: 'post',
    data: parameter,
  })
}

export function updateUser(parameter) {
  return axios({
    url: api.updateUser,
    method: 'post',
    data: parameter,
  })
}

export function selectUser(parameter) {
  return axios({
    url: api.selectUser,
    method: 'post',
    data: parameter,
  })
}

export function selectByCond(parameter) {
  return axios({
    url: api.selectByCond,
    method: 'post',
    data: parameter,
  })
}

export function upload(parameter) {
  return axios({
    url: api.upload,
    method: 'post',
    data: parameter,
  })
}

export function verifyPassword(parameter) {
  return axios({
    url: api.verifyPassword,
    method: 'post',
    data: parameter,
  })
}
