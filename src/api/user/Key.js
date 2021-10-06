import axios from '@/utils/request'
import { userApi } from '@/api'

export function queryKey(data) {
  return axios({
    url: userApi.queryKey,
    method: 'post',
    data: data,
  })
}
