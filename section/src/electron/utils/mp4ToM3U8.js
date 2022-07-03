import dayjs from "dayjs"
import path from "path"
import fs from "fs"
import fluentFfmpeg from "fluent-ffmpeg"
import ffmpegStaticElectron from "ffmpeg-static-electron"
import { isPathExists } from "./isPathExists"
import { createPath } from "./createPath"
import { logger } from "./logger"
import { fixFfmpegPath } from "./fixFfmpegPath"

export function mp4ToM3U8({
  filePath = '',
  fileName = '',
  fileType,
  uuid,
  line,
}, callBack) {
  return new Promise((resolve, reject) => {
    const name = fileName.substring(0, fileName.length - 4)
    const tsFileName = `${dayjs().format('YYYY-MM-DD')}`
    const tsFilePath = process.cwd() + `/video/cache/${tsFileName}/${name}`
    const videoFilePath = path.join(filePath, fileName)
    const m3u8FilePath = process.cwd() + `/video/m3u8/${tsFileName}`

    if (!fileName.length) {
      logger.info('文件名不能为空')
      return
    }

    if (!isPathExists(videoFilePath)) {
      logger.info('文件不存在', videoFilePath)
      return
    }

    if (fileType !== 'mp4') {
      logger.info('文件类型不正确')
      return
    }

    // 判断ts存放路径是否存在，不存在则创建
    if (!isPathExists(tsFilePath)) {
      createPath(tsFilePath)
    }

    // 判断m3u8存放路径是否存在，不存在则创建
    if (!isPathExists(m3u8FilePath)) {
      createPath(m3u8FilePath)
    }

    try {
      const ffmpeg = fluentFfmpeg()


      ffmpeg.setFfmpegPath(fixFfmpegPath(ffmpegStaticElectron.path))

      ffmpeg
        .input(videoFilePath)
        .inputOption([
          "-hwaccel cuvid",
          // "-hwaccel_device 1",
          "-c:v h264_cuvid",
          // "-c:v h264_nvenc",
        ])
        .videoCodec("h264_nvenc")
        .outputOptions([
          '-map 0',
          '-f hls',
          '-hls_time 5',
          '-segment_time 5',
          '-hls_list_size 0',
          '-hls_segment_filename',
          // '-movflags frag_keyframe+empty_moov',
          `${tsFilePath}/%d.ts`
        ])
        .output(`${m3u8FilePath}/${name}.m3u8`) // 索引输出路径
        .on('start', (commandLine) => {
          logger.info(`切片开始：${m3u8FilePath}/${name}.m3u8`)
        })
        .on('error', (err, stdout, stderr) => {
          // console.log(err, stdout, stderr)
          logger.info(`切片报错${m3u8FilePath}/${name}.m3u8`, `切片报错：${err.message}`)
          reject(err.message)
        })
        .on('progress', (progress) => {
          if (typeof callBack === "function") {
            callBack(uuid, progress.percent, progress)
          }
        })
        .on('end', (err, stdout, stderr) => {
          logger.info(`切片结束：${m3u8FilePath}/${name}.m3u8`)
          const m3u8PathList = []

          for (let index = 0; index < line; index++) {
            const copyName = `${m3u8FilePath}/${name}_${index + 1}.m3u8`
            fs.copyFileSync(`${m3u8FilePath}/${name}.m3u8`, copyName)
            m3u8PathList.push(copyName)
          }

          fs.rmSync(`${m3u8FilePath}/${name}.m3u8`)

          resolve({
            tsFilePath,
            m3u8PathList: m3u8PathList
          })
        })
        .run()
    } catch (error) {
      logger.info(error)
      reject()
    }
  })
}

console.log(fixFfmpegPath(ffmpegStaticElectron.path))