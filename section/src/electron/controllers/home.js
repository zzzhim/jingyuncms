import { isPathExists } from "../utils/isPathExists"
import { ipcMain } from "electron"
import { mp4ToM3U8, tsToPng } from "./ffmpeg"
import { getLocalVideoList } from "./video"
import { v4 as uuidv4 } from 'uuid'
import { logger } from "../utils/logger"

ipcMain.handle("getLocalVideoList", async (event, { path }) => {
  if(!isPathExists(path)) {
    return {
      code: 404,
      message: '路径不存在',
    }
  }

  getLocalVideoList(path).then(res => {
    event.sender.send(res.channel, {
      code: 200,
      data: {
        list: res.list,
        totalCount: res.totalCount,
      }
    })
  })

  return {
    code: 200,
    message: '获取视频列表成功',
  }
})

/**
 * 
 * @description 开始切片
 */
ipcMain.on("cutting", async (event, { videoPath, videoList }) => {
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
      for (let index = 0; index < cuttingList.length; index++) {
        const data = await mp4ToM3U8(
          {
            uuid: cuttingList[index].uuid,
            filePath: videoPath,
            fileName: cuttingList[index].fileName + '.' + cuttingList[index].type,
            fileType: cuttingList[index].type,
          },
          (uuid, percent, progress) => {
            // 发送切片进度
            event.sender.send("cuttingProgress", {
              uuid,
              percent,
              progress,
              taskType: '1',
            })
          }
        )

        tsToPng({
          uuid: cuttingList[index].uuid,
          dirPath: data.tsFilePath,
          m3u8Path: data.m3u8Path,
        }, (uuid, percent) => {
          // 发送切片进度
          event.sender.send("cuttingProgress", {
            uuid,
            percent,
            taskType: '2',
          })
        })
      }
    } catch (error) {
      logger.error(error)
    }
  }

  // 切片结束
  event.sender.send("cuttingEnd", {})
})