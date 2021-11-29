import axios from '@/utils/request'
import { menuApi } from '@/api/index'

export function fetchMenu(data) {
  return axios({
    url: menuApi.fetchMenu,
    method: 'get',
    params: data,
  })
}
