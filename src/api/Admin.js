import axios from '@/utils/request'
import api from '@/api/Index'

export function register(data) {
  return axios({
    url: api.register,
    method: 'post',
    data: data,
  })
}

export function reloadRoleResource(data) {
  return axios({
    url: api.reloadRoleResource,
    method: 'get',
    params: data,
  })
}

export function removeByUsername(data) {
  return axios({
    url: api.removeByUsername,
    method: 'get',
    params: data,
  })
}
