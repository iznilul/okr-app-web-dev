import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import animated from 'animate.css'
import './config/memberColumn.js'
import './permission'
import VueParticles from 'vue-particles'
import * as echarts from 'echarts'

import publicPageReset from '@/utils/public/publicPageReset'
import publicChangePageSize from '@/utils/public/publicChangePageSize'
import publicChangePage from '@/utils/public/publicChangePage'
import publicGetForm from '@/utils/public/publicGetForm'
import publicRemoveData from '@/utils/public/publicRemoveData'
import publicResetForm from '@/utils/public/publicResetForm'
import publicValidate from '@/utils/public/publicValidate'
import publicClickButton from '@/utils/public/publicClickButton'
import publicSend from '@/utils/public/publicSend'
import publicChangeVisible from '@/utils/public/publicChangeVisible'
import publicGetData from '@/utils/public/publicGetData'
import publicGetLike from '@/utils/public/publicGetLike'
import publicShowModal from '@/utils/public/publicShowModal'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(animated)
Vue.use(VueParticles)
Vue.use(publicPageReset)
Vue.use(publicChangePageSize)
Vue.use(publicChangePage)
Vue.use(publicGetForm)
Vue.use(publicGetData)
Vue.use(publicGetLike)
Vue.use(publicRemoveData)
Vue.use(publicResetForm)
Vue.use(publicValidate)
Vue.use(publicClickButton)
Vue.use(publicSend)
Vue.use(publicChangeVisible)
Vue.use(publicShowModal)

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

// 被index.html挂载的vue实例
const vue = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App), // 渲染APP.vue组件
})
export default vue
