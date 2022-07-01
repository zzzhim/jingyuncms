import fs from "fs"
import path from "path"
import { uploadM3u8File } from "../api/file"
import { uploadImg } from "../api/upload"
import { logger } from "./logger"
import { sleep } from "./sleep"

export async function tsUpload({ uuid, dirPath, m3u8PathList, uploadImgList }, callBack) {
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
        await sleep(1500)
      }
      
      await uploadM3u8(m3u8PathList, uploadImgList)
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

async function uploadM3u8(m3u8PathList, uploadImgList) {
  try {
    const result = await Promise.all(m3u8PathList.map(item => uploadM3u8File({ filePath: item })))

    for (let index = 0; index < result.length; index++) {
      const m3u8 = result[index]

      if(m3u8.code === 200) {
        const m3u8Name = m3u8.substring(0, fileName.length - 5) + '.m3u8'
        const list = m3u8Name.split('_')
        const doubanId = isNaN(parseInt(list[list.length - 1])) ? null : parseInt(list[list.length - 1])

        const params = {
          fileName: m3u8Name,
          fileUrl: m3u8.data.m3u8Url,
          vodName: list.filter((item, index) => index !== (list.length - 1)).join('_'),
          doubanId: doubanId,
          remarks: ''
        }

        const res = await addM3u8(params)

        if(res.code === 200) {
          logger.info('m3u8文件上传成功', params)
        }
      }
    }
  } catch (error) {
    logger.info(error)
  }
}