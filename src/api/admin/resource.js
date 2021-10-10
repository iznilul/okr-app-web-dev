import axios from '@/utils/request'
import { adminApi } from '../../api'

export function reloadRoleResource(data) {
  return axios({
    url: adminApi.reloadRoleResource,
    method: 'get',
    params: data,
  })
}
