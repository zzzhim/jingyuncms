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
    handleGetVideo({ state }) {
      ipcRenderer.invoke("getLocalVideoList", {
        path: state.videoForm.videoPathInput
      })
      .then(res => {
        if(res.code === 200) {
          Message.success(res.message)
        }else {
          Message.warning(res.message)
        }
      })
    },
    /**
     * 
     * @description 开始切片
     */
    async handleCutting(store) {
      const { rootState, dispatch, state } = store

      if(!state.videoForm.videoLocalList.length) {
        Message.warning('视频列表为空')
        return 
      }

      const result = dispatch("uploadStore/testUploadList", null, { root: true })
      
      if(result.code === 200) {
        ipcRenderer.send("cutting", {
          videoPath: state.videoForm.videoPathInput,
          videoList: state.videoForm.videoLocalList,
          uploadImgList: rootState.uploadStore.uploadImgList,
        })
      }
    }
  },
  modules: {
  }
}
