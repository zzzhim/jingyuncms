import Vue from 'vue'
import Vuex from 'vuex'
import { uploadStore } from './modules/upload'
import { cuttingStore } from './modules/cutting'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    uploadStore,
    cuttingStore,
  }
})
