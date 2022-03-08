import response from "../../utils/response"
import { readdir } from 'fs/promises'
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import fluentFfmpeg from 'fluent-ffmpeg'
import path from "path"
import dayjs from "dayjs"
import { isPathExists } from "../../utils/isPathExists"
import { mkdirPath } from "../../utils/mkdirPath"
import { M3u8ToMp4Converter } from "../../utils/m3u8ToMp4"

const base_url = path.join(__dirname, '../../ffmpeg')
const ffmpeg = fluentFfmpeg().setFfmpegPath(ffmpegInstaller.path)

class Video {
  /**
   * 获取mp4视频列表
   */
  async videoFileList({}) {
    try {
      let list = await readdir(base_url + '/video')

      if(Array.isArray(list) && list.length) {
        const fileType = '.mp4'
        list = list.filter(item => item.substring(item.length - 4).toLocaleLowerCase() === fileType)
      }

      return response.success(200, {
        fileList: list,
      })
    } catch (error) {
      console.log(error)
      return response.error(500, {}, error)
    }
  }

  /**
   * mp4ToM3U8
   */
  async mp4ToM3U8({}) {
    // ffmpeg -i music23.ts -c copy -map 0 -f segment -segment_list music23.m3u8 -segment_time 5 music23_%5d.ts
    // const pathStr = `src/ffmpeg/cache/${dayjs().year()}/${dayjs().month()}/${dayjs().date()}/0`

    // 判断路径是否存在
    // if(!isPathExists(__dirname + '../../../' + pathStr)) {
    //   // 创建文件夹
    //   mkdirPath( '/' + pathStr)
    // }

    try {
      ffmpeg
        .addInput(base_url + `/video/0.mp4`)
        .outputOptions([
          '-map 0',
          '-f hls',
          '-hls_time 5',
          // '-segment_time 5',
          '-hls_segment_filename',
          `cache_%v/${dayjs().year()}/${dayjs().month()}/${dayjs().date()}/%d.ts`
        ])
        .output(base_url + `/m3u8/0.m3u8`) // 索引输出路径
        .on('start', (commandLine) => {
          console.log('切片开始')
        })
        .on('error', (err, stdout, stderr) => {
          // console.log('切片报错: ' + err.message, err, stderr)
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
   * mp4ToM3U8
   */
  async downM3u8ToMp4({ fileUrl }) {

    ffmpeg
      .addInput(fileUrl)
      .on("error", error => {
        reject(new Error(error));
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
      .output(fileName)
      .run()

    return response.success(200, {

    }, '下载开始')
  }

  /**
   * 
   * 视频列表
  */
  async localVideoMp4List() {

  }
}

module.exports = new Video()
