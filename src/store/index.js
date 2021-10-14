import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user/user'
import menu from '@/store/modules/common/menu'
import getters from '@/store/getters'
import aside from '@/store/modules/common/aside'
import monitor from '@/store/modules/user/monitor'
import enumApi from '@/store/modules/user/enum'
import admin from '@/store/modules/admin/admin'
import commonLogin from '@/store/modules/common/commonLogin'
import userKey from '@/store/modules/user/userKey'
import adminKey from '@/store/modules/admin/adminKey'
import resource from '@/store/modules/admin/resource'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,
    menu,
    aside,
    monitor,
    adminKey,
    userKey,
    commonLogin,
    enumApi,
    admin,
    resource,
  },
  getters,
})

export default store
