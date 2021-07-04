import axios from '@/utils/request'
import api from '@/api/index'

export function login(parameter) {
  return axios({
    url: api.login,
    method: 'post',
    data: parameter
  })
}
