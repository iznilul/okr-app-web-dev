import axios from 'axios'
import { showLoading, closeLoading } from '@/utils/loading'
import dfaultSettings from '@/config/defaultSettings'

export const baseURL = process.env.NODE_ENV === 'development' ? dfaultSettings.baseURL.dev : dfaultSettings.baseURL.prod

const service = axios.create({
  baseURL: baseURL,
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => {
    showLoading()
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  (error) => Promise.reject(error)
)

service.interceptors.response.use(
  (response) => {
    closeLoading()
    const res = response.data
    // 如果后端返回类没有code标识则抛出
    if (!res.code) {
      return Promise.reject('返回出错')
    }
    // 如果接口正常，直接返回数据
    return res
  },
  (error) => {
    closeLoading()
    // console.log(error)
    return Promise.reject(error)
  }
)

export default service
