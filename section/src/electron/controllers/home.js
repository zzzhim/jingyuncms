import { isPathExists } from "../utils/isPathExists"
import { ipcMain } from "electron"
import { getLocalVideoList } from "./video"
import { v4 as uuidv4 } from 'uuid'
import { logger } from "../utils/logger"
import { mp4ToM3U8 } from "../utils/mp4ToM3U8"
import { tsToPng } from "../utils/tsToPng"
import { tsUpload } from "../utils/tsUpload"

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
ipcMain.on("cutting", async (event, { videoPath, videoList, uploadImgList }) => {
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
        // 视频切片
        const data = await mp4ToM3U8(
          {
            uuid: cuttingList[index].uuid,
            filePath: videoPath,
            fileName: cuttingList[index].fileName + '.' + cuttingList[index].type,
            fileType: cuttingList[index].type,
            line: uploadImgList.length, // 线路数量，根据线路数量生成对应m3u8文件
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

        // ts生成Png
        tsToPng({ dirPath: data.tsFilePath })

        // 视频上传到图床
        tsUpload(
          {
            uuid: cuttingList[index].uuid,
            dirPath: data.tsFilePath,
            m3u8PathList: data.m3u8PathList,
            uploadImgList,
          },
          (uuid, percent) => {
            // 发送切片进度
            event.sender.send("cuttingProgress", {
              uuid,
              percent,
              taskType: '2',
            })
          }
        )
      }
    } catch (error) {
      logger.error(error)
    }
  }

  // 切片结束
  event.sender.send("cuttingEnd", {})
})