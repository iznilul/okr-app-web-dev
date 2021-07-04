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

export function update(parameter) {
  return axios({
    url: api.update,
    method: 'post',
    data: parameter,
  })
}

export function select(parameter) {
  return axios({
    url: api.select,
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
