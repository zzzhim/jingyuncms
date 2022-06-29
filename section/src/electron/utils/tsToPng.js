import fs from "fs"
import path from "path"
import { base64_img } from "../config"
import { logger } from "../utils/logger"

export function tsToPng({ dirPath }) {
  let list = fs.readdirSync(dirPath)

  if(Array.isArray(list) && list.length > 0) {
    list = list.filter(fileName => fileName.substring(fileName.length - 3) === '.ts')

    while (list.length) {
      // 获取数组最后一个文件
      const fileName = list[list.length - 1]
      // ts转png
      const tsPath = path.join(dirPath, fileName)
      const data = fs.readFileSync(tsPath, "base64")
      const fileDataPath = path.join(dirPath, fileName.substring(0, fileName.length - 3) + '.png')
      fs.writeFileSync(fileDataPath, base64_img + data, "base64")
      fs.rmSync(tsPath)
      list.pop()
    }
  }
}
