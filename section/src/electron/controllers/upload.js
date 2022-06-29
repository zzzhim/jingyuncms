import { uploadConfigImgList } from "../api/upload"
import { setUploadList } from "../utils/auth"

// 获取图片上传接口
ipcMain.handle("getUploadList", async (event, {}) => {
  const result = await uploadConfigImgList({})

  if(result.code === 200) {
    setUploadList(result.data)
    return result.data
  }

  setUploadList([])

  return []
})