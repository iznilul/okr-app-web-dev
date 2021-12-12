import axios from '@/utils/request'
import { signupApi } from '@/api/index'

export function querySignUpList(data) {
  return axios({
    url: signupApi.querySignUpList,
    method: 'post',
    data: data,
  })
}

export function exportSignUp(data) {
  return axios({
    url: signupApi.exportSignUp,
    method: 'get',
    params: data,
    responseType: 'blob',
  })
}

export function changeSignUp(data) {
  return axios({
    url: signupApi.changeSignUp,
    method: 'post',
    data: data,
  })
}

export function querySignUp(data) {
  return axios({
    url: signupApi.querySignUp,
    method: 'get',
    params: data,
  })
}
