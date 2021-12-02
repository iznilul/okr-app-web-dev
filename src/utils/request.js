import axios from 'axios'
import dfaultSettings from '@/config/defaultSettings'
import { Notice } from 'view-design'
import router from '@/router'
import resultEnum from '@/utils/enum/ResultEnum'
import { resetTokenAndClearUser } from '@/utils/index'

export const baseURL = process.env.NODE_ENV === 'development' ? dfaultSettings.baseURL.dev : dfaultSettings.baseURL.prod

const service = axios.create({
  baseURL: baseURL,
  timeout: 50000,
})
// 正在进行中的请求列表
let reqList = []
/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
  const errorMsg = errorMessage || ''
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      console.log('重复请求,请求被中断')
      cancel(errorMsg)
      Notice.error({
        title: resultEnum.REQUEST_TOO_FAST.desc,
      })
      return
    }
  }
  reqList.push(url)
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function (reqList, url) {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1)
      break
    }
  }
}
service.interceptors.request.use(
  (config) => {
    let cancel
    // 设置cancelToken对象
    config.cancelToken = new axios.CancelToken((config) => {
      cancel = config
    })
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    stopRepeatRequest(reqList, config.url, cancel, `已有相同请求，${config.url} 请求被中断`)
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  (error) => Promise.reject(error)
)

service.interceptors.response.use(
  (response) => {
    // console.log(response)
    setTimeout(() => {
      allowRequest(reqList, response.config.url)
    }, 1000)
    const res = response.data
    console.log(res)
    // 如果token已经过期，则进行重定向
    if (res.code === 418 || res.code === 419) {
      Notice.error({
        title: '权限过期，请重新登录',
      })
      resetTokenAndClearUser()
      router.push('/')
    } else {
      if (res.code === 200) {
        return res
      } else {
        Notice.error({
          title: resultEnum.FAIL.desc,
          desc: res.msg,
        })
        return Promise.reject('操作码异常')
      }
    }
  },
  (error) => {
    // console.log(error)
    setTimeout(() => {
      allowRequest(reqList, error.config.url)
    }, 800)
    return Promise.reject(error)
  }
)

export default service
