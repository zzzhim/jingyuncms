import { isPathExists } from "../utils/isPathExists"
import { logger } from "../utils/logger"
import fs from "fs"
import { mediaType } from "../config"

export const getLocalVideoList = async (path) => {
  try {
    if(!isPathExists(path)) {
      logger.info('文件不存在', path)
      return 
    }
  
    let list = fs.readdirSync(path)

    list = list
        .filter(fileName => {
          const arr = fileName.split(".")

          const fileType = arr[arr.length - 1].toLocaleLowerCase()

          return mediaType.includes(fileType)
        })
        .map((item, index) => {
          const arr = item.split(".")
          const fileType = arr[arr.length - 1].toLocaleLowerCase()

          return {
            id: index + 1,
            fileName: item.substring(0, item.length - fileType.length - 1),
            type: fileType,
          }
        })

    return {
      list,
      totalCount: list.length
    }
  } catch (error) {
    logger.info(error)
  }
}