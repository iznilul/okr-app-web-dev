import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user/User'
import menu from '@/store/modules/common/Menu'
import getters from '@/store/Getters'
import aside from '@/store/modules/common/Aside'
import monitor from '@/store/modules/user/Monitor'
import enumApi from '@/store/modules/user/Enum'
import admin from '@/store/modules/admin/Admin'
import commonLogin from '@/store/modules/common/commonLogin'
import key from '@/store/modules/user/Key'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,
    menu,
    aside,
    monitor,
    key,
    commonLogin,
    enumApi,
    admin,
  },
  getters,
})

export default store
