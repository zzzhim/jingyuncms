import { isPathExists } from "../utils/isPathExists"
import { logger } from "../utils/logger"
import fs from "fs"

export const getLocalVideoList = async (path) => {
  return new Promise((resolve, reject) => {
    if(!isPathExists(path)) {
      logger.info('文件不存在')
      return 
    }
  
    fs.readdir(path, (err, list) => {
      if(err) {
        reject()
        return 
      }
  
      list = list
        .filter(fileName => fileName.substring(fileName.length - 4).toLocaleLowerCase() === '.mp4')
        .map((item, index) => ({
          id: index + 1,
          fileName: item.substring(0, item.length - 4),
          type: 'mp4',
        }))

      resolve({
        channel: 'updateVideoList',
        list,
        totalCount: list.length
      })
    })
  })
}