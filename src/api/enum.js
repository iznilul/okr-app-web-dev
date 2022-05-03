import axios from '@/utils/request'
import { enumApi } from '@/api/index'

export function enumUsername(param) {
  return axios({
    url: enumApi.enumUsername,
    method: 'get',
    params: param,
  })
}
export function enumName(param) {
  return axios({
    url: enumApi.enumName,
    method: 'get',
    params: param,
  })
}
export function enumMajor(param) {
  return axios({
    url: enumApi.enumMajor,
    method: 'get',
    params: param,
  })
}
export function enumKey(param) {
  return axios({
    url: enumApi.enumKey,
    method: 'get',
    params: param,
  })
}
export function enumRole(param) {
  return axios({
    url: enumApi.enumRole,
    method: 'get',
    params: param,
  })
}
export function enumUserStatus(param) {
  return axios({
    url: enumApi.enumUserStatus,
    method: 'get',
    params: param,
  })
}

export function enumSignUpStatus(param) {
  return axios({
    url: enumApi.enumSignUpStatus,
    method: 'get',
    params: param,
  })
}
export function enumBook(param) {
  return axios({
    url: enumApi.enumBook,
    method: 'get',
    params: param,
  })
}

export function enumTag(param) {
  return axios({
    url: enumApi.enumTag,
    method: 'get',
    params: param,
  })
}

export function enumOriginal(param) {
  return axios({
    url: enumApi.enumOriginal,
    method: 'get',
    params: param,
  })
}

export function enumCategory(param) {
  return axios({
    url: enumApi.enumCategory,
    method: 'get',
    params: param,
  })
}

export function enumBlog(param) {
  return axios({
    url: enumApi.enumBlog,
    method: 'get',
    params: param,
  })
}

export function enumPublish(param) {
  return axios({
    url: enumApi.enumPublish,
    method: 'get',
    params: param,
  })
}
