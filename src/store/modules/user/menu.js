import axios from '@/utils/request'
import { userApi } from '@/api'

export function fetchMenu(data) {
  return axios({
    url: userApi.menu,
    method: 'get',
    params: data,
  })
}
