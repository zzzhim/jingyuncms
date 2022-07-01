import { ipcRenderer } from "electron"
import { Message } from "element-ui"

export const cuttingStore = {
  namespaced: true,
  state: {
    cuttingList: [],
    isCuttingStart: false,
    videoForm: {
      videoPathInput: '',
      videoLocalList: [],
    }
  },
  mutations: {
    SET_CUTTING_LIST(state, list) {
      state.cuttingList = list
    },
    SET_CUTTING_START(state, bool) {
      state.isCuttingStart = bool
    },
    SET_VIDEO_FORM(state, videoForm) {
      state.videoForm = videoForm
    },
  },
  actions: {
    async handleGetVideo({ state, commit }) {
      try {
        const res = await ipcRenderer.invoke("getLocalVideoList", {
          path: state.videoForm.videoPathInput
        })

        if(res.code === 200) {
          commit("SET_VIDEO_FORM", {
            ...state.videoForm,
            videoLocalList: res.data.list
          })
        }else {
          Message.warning(res.message)
        }
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * 
     * @description 开始切片
     */
    async handleCutting(store) {
      const { rootState, dispatch, state } = store
      const uploadImgIds = rootState.uploadStore.uploadSetting.uploadImgIds
      const uploadImgList = rootState.uploadStore.uploadImgList

      await dispatch("handleGetVideo")

      if(!state.videoForm.videoLocalList.length) {
        Message.warning('视频列表为空')
        return 
      }

      const result = await dispatch("uploadStore/testUploadList", null, { root: true })

      if(result && result.code === 200) {
        ipcRenderer.send("cutting", {
          videoPath: state.videoForm.videoPathInput,
          videoList: state.videoForm.videoLocalList,
          uploadImgList: uploadImgList.filter(item => uploadImgIds.includes(item.id)),
          uploadSetting: rootState.uploadStore.uploadSetting
        })
      }
    }
  },
  modules: {
  }
}
