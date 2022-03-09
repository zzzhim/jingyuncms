import response from "../../utils/response"
import { readdir } from 'fs/promises'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import fluentFfmpeg from 'fluent-ffmpeg'
import path from "path"
import dayjs from "dayjs"
import { isPathExists } from "../../utils/isPathExists"
import { mkdirPath } from "../../utils/mkdirPath"
import { M3u8ToMp4Converter } from "../../utils/m3u8ToMp4"
import axios from "axios"
import fs from "fs"

const base_url = path.join(__dirname, '../../ffmpeg')
const ffmpeg = fluentFfmpeg().setFfmpegPath(ffmpegInstaller.path)

class Video {
  /**
   * 获取mp4视频列表
   */
  async videoFileList({ pageNo = 1, pageSize = 10 }) {
    try {
      let list = await readdir(base_url + '/video')
      const arr = []

      if(Array.isArray(list) && list.length) {
        const fileType = '.mp4'
        list = list.filter(item => item.substring(item.length - 4).toLocaleLowerCase() === fileType)

        list.filter((item, index) => index <= pageNo * pageSize).forEach(item => {
          const info = fs.statSync(path.join(base_url, '/video/', item))
          arr.push({
            fileName: item,
            fileSize: info.size,
          })
        })
      }

      return response.success(200, {
        fileList: arr,
      })
    } catch (error) {
      console.log(error)
      return response.error(500, {}, error)
    }
  }

  /**
   * mp4ToM3U8
   */
  async mp4ToM3U8({ fileName = '' }) {
    if(!fileName.length) {
      return response.error(500, {}, '文件名不能为空')
    }

    if(!isPathExists(base_url + `/video/${fileName}`)) {
      return response.error(500, {}, '文件不存在')
    }

    const fileType =  fileName.substring(fileName.length - 4)
    const name =  fileName.substring(0, fileName.length - 4)

    if(fileType !== '.mp4') {
      return response.error(500, {}, '文件类型不正确')
    }

    try {
      ffmpeg
        .addInput(base_url + `/video/${fileName}`)
        .outputOptions([
          '-map 0',
          '-f hls',
          '-hls_time 5',
          '-segment_time 5',
          '-hls_segment_filename',
          `cache_%v/${dayjs().year()}/${dayjs().month()}/${dayjs().date()}/%d.ts`
        ])
        .output(base_url + `/m3u8/${name}.m3u8`) // 索引输出路径
        .on('start', (commandLine) => {
          console.log('切片开始')
        })
        .on('error', (err, stdout, stderr) => {
          console.log('切片报错: ' + err.message)
        })
        .on('progress', (progress) => {
          console.log('切片进度: ' + progress.percent + '% done')
        })
        .on('end', (err, stdout, stderr) => {
          console.log('切片结束' /*, err, stdout, stderr*/)
        })
        .run()

      return response.success(200, {}, '切片开始')
    } catch (error) {
      console.log(error)
      return response.error(500, {}, error)
    }
  }

  /**
   * M3U8ToMp4
   */
  async downM3u8ToMp4({ fileUrl, fileName = `${new Date().getTime()}.mp4` }) {
    if(!fileUrl.length) {
      return response.error(500, {}, '下载地址不能为空')
    }

    ffmpeg
      .addInput(fileUrl)
      .on("error", error => {
        console.log(error)
      })
      .on('progress', function(progress) {
        console.log('下载进度: 已完成 ' + progress.percent + '%。');
      })
      .on("end", () => {
        console.log('下载进度: 已完成 100%。\n');
        console.log('=========================');
      })
      .outputOptions("-c copy")
      .outputOptions("-bsf:a aac_adtstoasc")
      .output(base_url + `/video/${fileName}.m3u8`)
      .run()

    return response.success(200, {}, '下载开始')
  }

  /**
   * 
   * 视频列表
   */
  async localVideoMp4List() {

  }
}

module.exports = new Video()
