import dayjs from "dayjs"
import fs from "fs"
import path from "path"
import fluentFfmpeg from "fluent-ffmpeg"
// import ffmpegInstaller from "@ffmpeg-installer/ffmpeg"
import ffmpegStaticElectron from "ffmpeg-static-electron"
import { isPathExists } from "../utils/isPathExists"
import { base64_img } from "../config"
import { uploadImg } from "../api/upload"
import { createPath } from "../utils/createPath"
import { sleep } from "../utils/sleep"
import { logger } from "../utils/logger"
import { fixFfmpegPath } from "../utils/fixFfmpegPath"

/**
 * 
 * @description MP4转M3U8
 * @returns {string} tsFilePath
 * @returns {string} m3u8Path
 */
export async function mp4ToM3U8({
  filePath = '',
  fileName = '',
  fileType,
  uuid,
}, callBack) {
  return new Promise((resolve, reject) => {
    const name = fileName.substring(0, fileName.length - 4)
    const tsFileName = `${dayjs().format('YYYY-MM-DD')}`
    const tsFilePath = process.cwd() + `/video/cache/${tsFileName}/${name}`
    // const videoFilePath = process.cwd() + `/video/${fileName}`
    const videoFilePath = path.join(filePath, fileName)
    const m3u8FilePath = process.cwd() + `/video/m3u8/${tsFileName}`

    if (!fileName.length) {
      logger.info('文件名不能为空')
      return 
    }

    if(!isPathExists(videoFilePath)) {
      logger.info('文件不存在', videoFilePath)
      return 
    }

    if (fileType !== 'mp4') {
      logger.info('文件类型不正确')
      return 
    }

    // 判断ts存放路径是否存在，不存在则创建
    if(!isPathExists(tsFilePath)) {
      createPath(tsFilePath)
    }

    // 判断m3u8存放路径是否存在，不存在则创建
    if(!isPathExists(m3u8FilePath)) {
      createPath(m3u8FilePath)
    }

    // 判断m3u8存放路径是否存在，不存在则创建
    if(!isPathExists(m3u8FilePath)) {
      createPath(m3u8FilePath)
    }

    try {
      const ffmpeg = fluentFfmpeg().setFfmpegPath(fixFfmpegPath(ffmpegStaticElectron.path))

      ffmpeg
        .addInput(videoFilePath)
        .outputOptions([
          '-map 0',
          '-f hls',
          '-hls_time 5',
          '-segment_time 5',
          '-hls_list_size 0',
          '-hls_segment_filename',
          // `cache_%v/%d.ts`
          `${tsFilePath}/%d.ts`
        ])
        .output(`${m3u8FilePath}/${name}.m3u8`) // 索引输出路径
        .on('start', (commandLine) => {
          logger.info('切片开始')
        })
        .on('error', (err, stdout, stderr) => {
          logger.info('切片报错: ' + err.message)
          reject(err.message)
        })
        .on('progress', (progress) => {
          logger.info('切片进度: ' + progress.percent + '% done')
          if(typeof callBack === "function") {
            callBack(uuid, progress.percent, progress)
          }
        })
        .on('end', (err, stdout, stderr) => {
          logger.info('切片结束' /*, err, stdout, stderr*/)
          // tsToPng(tsFilePath, `${m3u8FilePath}/${name}.m3u8`)
          resolve({
            tsFilePath,
            m3u8Path: `${m3u8FilePath}/${name}.m3u8`
          })
        })
        .run()
    } catch (error) {
      logger.info(error)
      reject()
    }
  })
}

export async function tsToPng({
  uuid,
  dirPath,
  m3u8Path,
}, callBack) {
  let list = fs.readdirSync(dirPath)

  if(Array.isArray(list) && list.length > 0) {
    // const urlList = []

    list = list.filter(fileName => fileName.substring(fileName.length - 3) === '.ts')
    const length = list.length

    while (list.length) {
      // 获取数组最后一个文件
      const fileName = list[list.length - 1]
      // ts转png
      const tsPath = path.join(dirPath, fileName)
      const data = fs.readFileSync(tsPath, "base64")
      const fileDataPath = path.join(dirPath, fileName.substring(0, fileName.length - 3) + '.png')
      fs.writeFileSync(fileDataPath, base64_img + data, "base64")

      try {
        logger.info(`${fileName}开始上传`)
        const res = await uploadImg(fileDataPath, )
        
        if(res.code === 200) {
          updateM3u8File(m3u8Path, fileName, res.data.url)
          fs.rmSync(tsPath)
          fs.rmSync(fileDataPath)
          list.pop()
          logger.info(`${fileName}上传完成,删除本地文件`)

          if(typeof callBack === "function") {
            callBack(uuid, (length - list.length) / length * 100)
          }
        }else {
          // 上传失败
          logger.info(`${fileName}上传失败`)
        }
      } catch (error) {
        logger.info(error)
      }

      // 延迟3秒，然后开始下次请求
      await sleep(3000)
    }
  }
}

async function updateM3u8File(m3u8Path, oldStr, newStr) {
  fs.readFile(m3u8Path, "utf8", (err, data) => {
    if(err) {
      logger.info(err)
    }

    data = data.replace(oldStr, newStr)

    fs.writeFile(m3u8Path, data, 'utf8', (err, data) => {
      if(err) {
        logger.info(err)
      }
    })
  })
}
