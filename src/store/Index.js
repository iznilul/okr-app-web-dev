import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/User'
import menu from '@/store/modules/Menu'
import getters from '@/store/Getters'
import aside from '@/store/modules/Aside'
import monitor from '@/store/modules/Monitor'
import enumApi from '@/store/modules/Enum'
import common from '@/store/modules/Common'
import admin from '@/store/modules/Admin'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,
    menu,
    aside,
    monitor,
    common,
    enumApi,
    admin,
  },
  getters,
})

export default store
