import axios from 'axios'
import { showLoading, closeLoading } from '@/utils/loading'
import dfaultSettings from '@/config/defaultSettings'
import { Notice } from 'view-design'
import router from '@/router'

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
    // console.log(response)
    const res = response.data
    // console.log(res)
    // 如果token已经过期，则进行重定向
    if (res.code === 2004) {
      Notice.error({
        title: '登录过期，请重新登录',
      })
      localStorage.clear()
      router.push('/login')
    } else if (res.code !== 200) {
      //谜之bug，不能用this.$Notice
      Notice.error({
        title: '操作失败',
        desc: res.msg,
      })
      return Promise.reject('数据返回失败')
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
