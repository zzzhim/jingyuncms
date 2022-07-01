import { isPathExists } from "../utils/isPathExists"
import { logger } from "../utils/logger"
import fs from "fs"

export const getLocalVideoList = async (path) => {
  try {
    if(!isPathExists(path)) {
      logger.info('文件不存在', path)
      return 
    }
  
    let list = fs.readdirSync(path)

    list = list
        .filter(fileName => fileName.substring(fileName.length - 4).toLocaleLowerCase() === '.mp4')
        .map((item, index) => ({
          id: index + 1,
          fileName: item.substring(0, item.length - 4),
          type: 'mp4',
        }))

    return {
      list,
      totalCount: list.length
    }
  } catch (error) {
    logger.info(error)
  }
}