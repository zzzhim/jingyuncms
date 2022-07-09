import path from "path"
import { mp4ToM3U8 } from "./mp4ToM3U8"
import { tsToPng } from "./tsToPng"
import { tsUpload } from "./tsUpload"
import { logger } from "./logger"
import { Queue } from "./queue"

const sectionQueue = new Queue({
  autostart: true
})

export function section(params, callback) {
  return new Promise(async (resolve, reject) => {
    try {
      // 视频切片
      const data = await mp4ToM3U8(
        {
          uuid: params.uuid,
          filePath: params.filePath,
          fileName: params.fileName + '.' + params.fileType,
          fileType: params.fileType,
          line: params.uploadImgList.length, // 线路数量，根据线路数量生成对应m3u8文件
        },
        (uuid, percent, progress) => {
          // 发送切片进度
          callback({ uuid, percent, progress, taskType: '1' })
        }
      )

      // ts生成Png
      tsToPng({ dirPath: data.tsFilePath })

      sectionQueue.push(async function() {
        return await tsUpload(
          {
            uuid: params.uuid,
            videoFilePath: path.join(params.filePath, params.fileName + '.' + params.fileType),
            dirPath: data.tsFilePath,
            m3u8PathList: data.m3u8PathList,
            uploadImgList: params.uploadImgList,
            uploadSetting: params.uploadSetting
          },
          (uuid, percent) => {
            // 发送上传进度
            callback({ uuid, percent, taskType: '2' })
          }
        )
      })

      resolve(true)
    } catch (error) {
      console.log(error)
      reject(false)
    }
  })
}

export { sectionQueue }