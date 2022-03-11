
import { VideoCategoryModel } from "../model/video_category"
import logger from "../utils/logger"
import response from "../utils/response"

/**
 * 
 * @description 获取视频分类树
 */
export const videoCategoryTree = async ({}) => {
  try {
    const data = await VideoCategoryModel.findAndCountAll({})

    return response.success(200, data)
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}


/**
 * 
 * @description 添加视频分类
 */
export const addVideoCategory = async (params) => {
  try {
    await VideoCategoryModel.create({ ...params })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}