import Vue from 'vue'
import Vuex from 'vuex'
import { uploadStore } from './modules/upload'
import { cuttingStore } from './modules/cutting'
import { ipcRenderer } from "electron"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    getUserInfo({ commit }) {
      ipcRenderer.invoke("getUserInfo").then((userInfo) => {
        commit("SET_USER_INFO", userInfo)
      })
    }
  },
  modules: {
    uploadStore,
    cuttingStore,
  }
})
