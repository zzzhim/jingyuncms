import { isPathExists } from "../utils/isPathExists"
import { ipcMain } from "electron"
import { getLocalVideoList } from "./video"
import { v4 as uuidv4 } from 'uuid'
import { logger } from "../utils/logger"
import { arrToDim } from "../utils/arrToDim"
import { section } from "../utils/section"

ipcMain.handle("getLocalVideoList", async (event, { path }) => {
  if(!isPathExists(path)) {
    return {
      code: 404,
      message: '路径不存在',
    }
  }

  const data = await getLocalVideoList(path)

  return {
    code: 200,
    message: '获取视频列表成功',
    data,
  }
})

/**
 * 
 * @description 开始切片
 */
ipcMain.on("cutting", async (event, {
  videoPath,
  videoList,
  uploadImgList,
  uploadSetting,
}) => {
  // 切片开始
  event.sender.send("cuttingStart", {})

  if(Array.isArray(videoList) && videoList.length) {
    const cuttingList = videoList.map(item => ({
      ...item,
      uuid: uuidv4(),
      progress: 0,
      taskType: '1',
    }))

    // 发送cuttingList
    event.sender.send("cuttingList", {
      cuttingList: cuttingList
    })

    try {
      const list = arrToDim(cuttingList, uploadImgList.length)

      for (let index = 0; index < list.length; index++) {
        const arr = list[index]
        const sendList = []

        for (let i = 0; i < arr.length; i++) {
          sendList.push({
            uuid: arr[i].uuid,
            filePath: videoPath,
            fileName: arr[i].fileName,
            fileType: arr[i].type,
            uploadImgList: [ ...uploadImgList ],
            uploadSetting: { ...uploadSetting },
          })
        }

        await Promise.all(sendList.map(item => section(
          item,
          (params) => {
            // 发送切片进度
            event.sender.send("cuttingProgress", { ...params })
          }
        )))
      }
    } catch (error) {
      logger.error(error)
    }
  }

  // 切片结束
  event.sender.send("cuttingEnd", {})
})