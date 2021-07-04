import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import menu from '@/store/modules/menu'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    user,
    menu
  },
  getters
})

export default store
