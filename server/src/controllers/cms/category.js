
import { BindCategoryModel } from "../../model/bindCategory"
import { VideoCategoryModel } from "../../model/videoCategory"
import logger from "../../utils/logger"
import response from "../../utils/response"

/**
 * 
 * @description 获取视频分类树
 */
export const videoCategoryTree = async ({}) => {
  try {
    const data = await VideoCategoryModel.findAndCountAll({})

    return response.success(200, { list: data.rows, total: data.count })
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

/**
 * 
 * @description 编辑视频分类
 */
export const editVideoCategory = async (params) => {
  try {
    if(params.parentId && params.parentId != 0) {
      const data = await VideoCategoryModel.findOne({
        where: {
          id: params.parentId,
          parentId: params.id,
        }
      })

      if(data) {
        return response.success(400, {}, '该分类为当前分类子级')
      }
    }

    await VideoCategoryModel.update(
      { ...params },
      {
        where: {
          id: params.id
        }
      }
    )

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}

/**
 * 
 * @description 删除视频分类
 */
export const delVideoCategory = async (params) => {
  try {
    await VideoCategoryModel.destroy({
      where: {
        id: params.id
      }
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}

/**
 * 
 * @description 指定接口分类绑定列表
 */
export const bindInterfaceList = async (params) => {
  try {
    const data = await BindCategoryModel.findAndCountAll({
      where: {
        interfaceId: params.id
      }
    })

    return response.success(200, { total: data.count, list: data.rows })
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}

/**
 * 
 * @description 指定接口分类绑定列表
 */
export const bindInterfaceAdd = async (params) => {
  try {
    await BindCategoryModel.create({ ...params })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}

