import Vue from 'vue'
import Vuex from 'vuex'
import router from './modules/router'
import auth from './modules/auth'
import storage from './modules/storage'
import createPersistedState from 'vuex-persistedstate' //让store持久化

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production' // 是否开启严格模式

const store = new Vuex.Store({
  modules: {
    router: router,
    storage: storage,
    auth: auth
  },
  strict: debug,
  plugins: [createPersistedState()]
})

export default store
