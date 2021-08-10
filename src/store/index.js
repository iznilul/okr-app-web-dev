import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import menu from '@/store/modules/menu'
import getters from '@/store/getters'
import aside from '@/store/modules/aside'
import monitor from '@/store/modules/monitor'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,
    menu,
    aside,
    monitor,
  },
  getters,
})

export default store
