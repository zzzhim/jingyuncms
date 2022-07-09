import fs from "fs"
import path from "path"
import { uploadM3u8File } from "../api/file"
import { addM3u8 } from "../api/m3u8"
import { uploadImg } from "../api/upload"
import { logger } from "./logger"
import { sleep } from "./sleep"

export async function tsUpload({ uuid, dirPath, m3u8PathList, uploadImgList, uploadSetting, videoFilePath }, callBack) {
  try {
    let list = fs.readdirSync(dirPath)

    if(Array.isArray(list) && list.length > 0) {
      list = list.filter(fileName => fileName.substring(fileName.length - 4) === '.png')
      list = list.sort((f, l) =>  parseInt(f) - parseInt(l))
      const length = list.length

      while (list.length) {
        try {
          // 获取数组最后一个文件
          const fileName = list[list.length - 1]
          // 视频文件路径
          const fileDataPath = path.join(dirPath, fileName)

          const result = await Promise.all(uploadImgList.map(item => uploadImg(fileDataPath, item)))

          let bool = true

          result.forEach((item, index) => {
            if(item.code == 200) {
              const oldStr = fileName.substring(0, fileName.length - 4) + '.ts'
              updateM3u8File(m3u8PathList[index], oldStr, item.data.url)
            }else {
              bool = false
            }
          })

          if(bool) { // 全部上传成功，否则重新上传
            fs.rmSync(fileDataPath) // 删除上传的文件
            list.pop()

            if(typeof callBack === "function") {
              callBack(uuid, (length - list.length) / length * 100)
            }
          }
        } catch (error) {
          logger.info(error)
        }

        // 延迟3秒，然后开始下次请求
        // await sleep(3000)
        await sleep(800)
      }
      
      await uploadM3u8(m3u8PathList, uploadImgList, uploadSetting)

      if(uploadSetting.isDelVideo == '1') {
        // 删除原视频
        fs.rmSync(videoFilePath)
      }
    }
  } catch (error) {
    logger.info(error)
  }
}

function updateM3u8File(m3u8Path, oldStr, newStr) {
  let data = fs.readFileSync(m3u8Path, "utf8")

  data = data.replace(oldStr, newStr)

  fs.writeFileSync(m3u8Path, data, 'utf8')
}

async function uploadM3u8(m3u8PathList, uploadImgList, uploadSetting) {
  try {
    const result = await Promise.all(m3u8PathList.map(item => uploadM3u8File({ filePath: item })))
    const sendList = []

    for (let index = 0; index < result.length; index++) {
      sendList.push({
        m3u8: result[index],
        uploadImg: uploadImgList[index],
        m3u8Url: m3u8PathList[index],
      })
    }

    await Promise.all(sendList.map(item => uploadM3u8Info(item)))
  } catch (error) {
    logger.info(error)
  }
}

async function uploadM3u8Info({ m3u8, uploadImg, m3u8Url }) {
  if(m3u8.code === 200) {
    const m3u8Path = path.normalize(m3u8Url).split('\\')
    const name = m3u8Path[m3u8Path.length - 1]
    const m3u8Name = name.substring(0, name.length - 5)
    const list = m3u8Name.split('_')
    const doubanId = isNaN(parseInt(list[list.length - 2])) ? '0' : parseInt(list[list.length - 2])

    const params = {
      fileName: m3u8Name,
      fileUrl: m3u8.data.m3u8Url,
      vodName: list.filter((item, index) => index < (list.length - 1)).join('_'),
      doubanId: doubanId,
      remarks: `切片工具上传，上传图床_id：${uploadImg.id}_configName：${uploadImg.configName}_remarks：${uploadImg.remarks}`
    }

    const res = await addM3u8(params)

    if(res.code === 200) {
      logger.info('m3u8文件上传成功', params)
    }else {
      logger.info('m3u8文件上传失败', res.message)
      throw Error(res.message)
    }
  }
}