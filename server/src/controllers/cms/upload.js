import response from '../../utils/response'
import logger from '../../utils/logger'
import { UploadImgConfigModel } from '../../model/uploadImgConfig'

/**
 * 
 * @description 获取imgconfig列表
 */
export const uploadImgConfigList = async () => {
  try {
    const data = await UploadImgConfigModel.findAll({})

    return response.success(200, data)
  } catch (error) { // 没有通过校验or未知错误
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @description 添加imgconfig配置
 */
export const uploadImgConfigAdd = async ({
  configName,
  baseUrl,
  url,
  fileParamName,
  addParam,
  headers,
  result,
  paramType,
  remarks,
}) => {
  try {
    await UploadImgConfigModel.create({
      configName,
      baseUrl,
      url,
      fileParamName,
      addParam,
      headers,
      result,
      paramType,
      remarks,
    })

    return response.success(200, {})
  } catch (error) { // 没有通过校验or未知错误
    logger.error(error)
    return response.error(500, {}, error)
  }
}


/**
 * 
 * @description 修改imgconfig配置
 */
export const uploadImgConfigEdit = async ({
  id,
  configName,
  baseUrl,
  url,
  fileParamName,
  addParam,
  headers,
  result,
  paramType,
  remarks,
  status = "0",
}) => {
  try {
    await UploadImgConfigModel.update(
      {
        configName,
        baseUrl,
        url,
        fileParamName,
        addParam,
        headers,
        result,
        paramType,
        remarks,
        status,
      },
      {
        where: {
          id,
        }
      }
    )

    return response.success(200, {})
  } catch (error) { // 没有通过校验or未知错误
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * @param {number} id id
 * @description 删除imgconfig配置
 */
export const uploadImgConfigDel = async ({ id }) => {
  try {
    await UploadImgConfigModel.destroy(
      {
        where: {
          id,
        }
      }
    )

    return response.success(200, {})
  } catch (error) {
    logger.error(error)

    return response.error(500, {})
  }
}