import { ipcRenderer } from "electron"
import { Message } from "element-ui"

export const uploadStore = {
  namespaced: true,
  state: {
    uploadImgList: [],
    uploadSetting: { // 上传配置
      activeNum: 3,
      isDelVideo: '1',
      uploadImgIds: [],
      refreshVideo: '1',
    },
    lineList: [
      {
        name:'1条线路',
        value: 1,
      },
      {
        name:'2条线路',
        value: 2,
      },
      {
        name:'3条线路',
        value: 3,
      },
      {
        name:'4条线路',
        value: 4,
      },
    ]
  },
  mutations: {
    SET_UPLOAD_IMG_LIST(state, list) {
      state.uploadImgList = list
    }
  },
  actions: {
    // 获取图床列表
    getUploadList({ commit }) {
      ipcRenderer.invoke("getUploadList", {})
        .then(result => {
          commit('SET_UPLOAD_IMG_LIST', result)
        })
    },
    // 测试图床是否正常
    testUploadList({ state }){
      const list = state.uploadSetting.uploadImgIds

      if(list.length === 0) {
        Message.warning("请选择图床")
        return 
      }

      if(list.length !== state.uploadSetting.activeNum) {
        Message.warning("图床数量与线路数量需保持一致")
        return 
      }

      // 测试图床上传
      ipcRenderer.invoke("testUploadList", {
        uploadImgList: state.uploadImgList.filter(item => list.includes(item.id)),
      }).then(result => {
        if(result.code === 200) {
          Message.success("图床接口正常")
        }else {
          Message.warning(result.message)
        }
      })
    }
  },
  modules: {
  }
}
