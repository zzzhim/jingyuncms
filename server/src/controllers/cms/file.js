import dayjs from 'dayjs'
import fs from 'fs'
import path from 'path'
import { v4 as uuidV4 } from 'uuid'
import { douyinUpload, hupuUpload, kuaishouUpload } from '../../api/upload'
import { localUrl } from '../../config'
import { createPath } from '../../utils/createPath'
import logger from '../../utils/logger'
import response from '../../utils/response'
import { m3u8Upload } from '../../yup/file'
// import { FormData } from "formdata-node"
import FormData from 'form-data'

/**
 *
 * @description 上传m3u8
 */
export const uploadM3u8 = async ({ file }) => {
  try {
    // 校验文件
    await m3u8Upload.validateSync({ file })

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

/**
 *
 * @param {file} file 文件
 * @param {string} type 1 本地 2 oss
 * @description 上传图片
 */
export const uploadImg = async ({ type, file }) => {
  try {
    if(type === '1') {
      // 校验文件
      await m3u8Upload.validateSync({ file })

      // 要保存到的文件夹目录
      const dir = `/image/${dayjs().format('YYYY_MM_DD')}`

      const dirPath = path.join(process.cwd(), `/src/static/${dir}`)
      if (!fs.existsSync(dirPath)) {
        createPath(dirPath)
      }

      const arr = file.originalname.split('.')
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
    }else if(type === '2') {
      // 要保存到的文件夹目录
      const dir = `/image/${dayjs().format('YYYY_MM_DD')}`
      const dirPath = path.join(process.cwd(), `/src/static/${dir}`)
      if (!fs.existsSync(dirPath)) {
        createPath(dirPath)
      }

      const arr = file.originalname.split('.')
      const fileType = arr.length >= 2 ? `${arr[arr.length - 1]}` : ''
      // 生成文件名称
      const filename = `${dayjs().format('YYYY_MM_DD_HH_mm_ss_')}${uuidV4()}.${fileType}`

      // 生成本地图片
      fs.writeFileSync(`${dirPath}/${filename}`, file.buffer.toString('base64'), "base64")

      const formData = new FormData()

      // console.log(await fileFromPath(`${dirPath}/${filename}`))
      // formData.set("file", await fileFromPath(`${dirPath}/${filename}`))
      // formData.set("file", await fileFromPath(`${dirPath}/${filename}`))

      const localFile = fs.createReadStream(`${dirPath}/${filename}`)
      // const localFile = new File(
      //   [fs.readFileSync(`${dirPath}/${filename}`)],
      //   fileName,
      //   { type: `image/${fileType}` } // what I upload is image.
      // )

      formData.append('file', file)
      // formData.set('file', fs.createReadStream(`${dirPath}/${filename}`), {
      //   name: filename,
      //   size: Buffer.byteLength(file.buffer)
      // })

      // console.log(formData.get('file'))

      try {
        const res = await douyinUpload(formData)
        // const res = await kuaishouUpload(formData)
        // const res = await hupuUpload(formData)

        fs.rmSync(`${dirPath}/${filename}`)
        if(res.code === 200) {
          return response.success(200, { url: res.data.url }, '保存文件成功')
        }
      } catch (error) {
        fs.rmSync(`${dirPath}/${filename}`)
        logger.error(error)
      }
    }

    return response.error(500, {}, '保存文件失败')
  } catch (error) { // 没有通过校验or未知错误
    console.log(error, 'error')
    return response.error(500, {}, error)
  }
}
