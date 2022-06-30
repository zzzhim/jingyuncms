import path from "path"
import { ipcMain } from "electron"
import { uploadConfigImgList, uploadImg } from "../api/upload"
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

ipcMain.handle("testUploadList", async (event, { uploadImgList }) => {
  const sendList = uploadImgList.map(item => uploadImg(path.join(process.cwd(), 'tp.png'), item))
  
  const result = await Promise.all(sendList)

  let bool = true

  result.forEach((item, index) => {
    if(item.code == 200) {
    }else {
      bool = false
    }
  })

  if(bool) {
    return {
      code: 200,
      message: '测试通过',
    }
  }

  return {
    code: 500,
    message: '图床失效',
  }
})
