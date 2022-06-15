import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'
import { v4 as uuidV4 } from 'uuid'
import { localUrl } from '../../config'
import { createPath } from '../../utils/createPath'
import logger from '../../utils/logger'
import response from '../../utils/response'
import { fileUpload } from '../../yup/file'

/**
 *
 * @description 上传m3u8
 */
export const uploadM3u8 = async ({ file }) => {
  try {
    // 校验文件
    await fileUpload.validateSync({ file })

    // 要保存到的文件夹目录
    const dir = `/m3u8/${dayjs().format('YYYY_MM_DD')}`

    const dirPath = path.join(process.cwd(), `/src/static/${dir}`)
    if (!fs.existsSync(dirPath)) {
      createPath(dirPath)
    }

    const arr = file.name.split('.')
    const fileType = arr.length >= 2 ? `.${arr[arr.length - 1]}` : ''
    // 生成文件名称
    const filename = `${dayjs().format('YYYY_MM_DD_HH_mm_ss_')}${uuidV4()}${fileType}`

    // 异步
    // fs.rename(file.path, `${dir}/${filename}`, (err, data) => {
    //   if(err) {
    //     logger.error(err)
    //     return 
    //   }

    //   logger.info(`移动文件成功,old:${file.path},new:${dir}/${filename}`)
    // })

    // 同步移动文件
    fs.renameSync(file.path, `${dirPath}/${filename}`)

    return response.success(200, { url: `${localUrl + dir}/${filename}` }, '保存文件成功')
  } catch (error) { // 没有通过校验or未知错误
    return response.error(500, {}, error)
  }
}