import axios from '@/utils/request'
import { sysRecordApi } from '@/api/index'

export function querySysRecord(data) {
  return axios({
    url: sysRecordApi.querySysRecord,
    method: 'post',
    data: data,
  })
}
