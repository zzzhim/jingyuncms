import dayjs from 'dayjs'
import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'
import { v4 as uuidV4 } from 'uuid'
import { createPath } from '../../utils/createPath'
import logger from '../../utils/logger'
import response from '../../utils/response'

/**
 *
 * @param {file} file 文件
 * @param {string} username_dir 用户目录
 * @description 上传m3u8
 */
export const uploadM3u8 = async ({ file, username_dir, prefixHost }) => {
  try {
    // 要保存到的文件夹目录
    const dir = `/image/${username_dir}/${dayjs().format('YYYY_MM_DD')}`

    const dirPath = path.join(process.cwd(), `/public/${dir}`)

    if (!fs.existsSync(dirPath)) {
      // createPath(dirPath)
      mkdirp.sync(dirPath)
    }

    // 生成文件名称
    const filename = `${uuidV4()}.m3u8`

    // 生成本地文件
    fs.writeFileSync(`${dirPath}/${filename}`, file.buffer.toString('base64'), "base64")

    return response.success(200, { m3u8Url: prefixHost + `${dir}/${filename}` }, '保存文件成功')
  } catch (error) { // 没有通过校验or未知错误
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 *
 * @param {file} file 文件
 * @param {string} username_dir 用户目录
 * @description 上传图片
 */
export const uploadImg = async ({ file, username_dir, prefixHost }) => {
  try {
    // 要保存到的文件夹目录
    const dir = `/image/${username_dir}/${dayjs().format('YYYY_MM_DD')}`
    const dirPath = path.join(process.cwd(), `/public/${dir}`)
    if (!fs.existsSync(dirPath)) {
      // createPath(dirPath)
      mkdirp.sync(dirPath)
    }


    // 生成文件名称
    const filename = `${uuidV4()}.png`

    // 生成本地图片
    fs.writeFileSync(`${dirPath}/${filename}`, file.buffer.toString('base64'), "base64")

    return response.success(200, { imgUrl: prefixHost + `${dir}/${filename}` }, '保存文件成功')
  } catch (error) { // 没有通过校验or未知错误
    logger.error(error)
    return response.error(500, {}, error)
  }
}
