import Vue from 'vue'
import axios from 'axios'
import ViewUI from 'view-design'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import animated from 'animate.css'
import './permission'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(animated)
Vue.use(VueParticles)

Vue.prototype.$axios = axios

// 被index.html挂载的vue实例
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App), // 渲染APP.vue组件
})
