import axios from '@/utils/request'
import api from '@/api/Index'

export function modifyUserInfo(data) {
  return axios({
    url: api.modifyUserInfo,
    method: 'post',
    data: data,
  })
}

export function getUserInfo() {
  return axios({
    url: api.getUserInfo,
    method: 'get',
    // params: param,
  })
}

export function getUserInfoByUsername(param) {
  return axios({
    url: api.getUserInfoByUsername,
    method: 'get',
    params: param,
  })
}

export function userInfoByCond(data) {
  return axios({
    url: api.userInfoByCond,
    method: 'post',
    data: data,
  })
}

export function modifyPassword(data) {
  return axios({
    url: api.modifyPassword,
    method: 'post',
    data: data,
  })
}
