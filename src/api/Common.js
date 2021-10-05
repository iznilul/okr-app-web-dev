import axios from '@/utils/request'
import api from '@/api/Index'

export function login(data) {
  return axios({
    url: api.login,
    method: 'post',
    data: data,
  })
}
