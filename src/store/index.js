import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import menu from '@/store/modules/menu'
import getters from '@/store/getters'
import aside from '@/store/modules/aside'
import book from '@/store/modules/book'
import monitor from '@/store/modules/monitor'
import enumApi from '@/store/modules/enum'
import common from '@/store/modules/common'
import key from '@/store/modules/key'
import resource from '@/store/modules/resource'
import signup from '@/store/modules/signup'
import tag from '@/store/modules/tag'
import sysRecord from '@/store/modules/sysRecord'
import blog from '@/store/modules/blog'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        user,
        menu,
        aside,
        blog,
        book,
        monitor,
        key,
        common,
        enumApi,
        resource,
        signup,
        tag,
        sysRecord
    },
    getters
})

export default store
