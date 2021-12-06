import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import menu from '@/store/modules/menu'
import getters from '@/store/getters'
import aside from '@/store/modules/aside'
import monitor from '@/store/modules/monitor'
import enumApi from '@/store/modules/enum'
import common from '@/store/modules/common'
import key from '@/store/modules/key'
import resource from '@/store/modules/resource'
import sysRecord from '@/store/modules/sysRecord'
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
    common,
    enumApi,
    resource,
    sysRecord,
  },
  getters,
})

export default store
