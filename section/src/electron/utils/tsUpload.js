import fs from "fs"
import path from "path"
import { uploadImg } from "../api/upload"
import { sleep } from "./sleep"

export async function tsUpload({ uuid, dirPath, m3u8PathList, uploadImgList }, callBack) {
  let list = fs.readdirSync(dirPath)

  if(Array.isArray(list) && list.length > 0) {
    list = list.filter(fileName => fileName.substring(fileName.length - 3) === '.ts')

    while (list.length) {
      // 获取数组最后一个文件
      const fileName = list[list.length - 1]
      // ts转png
      const fileDataPath = path.join(dirPath, fileName)

      const result = await Promise.all(
        ...uploadImgList.map(item => uploadImg(fileDataPath, item))
      )

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