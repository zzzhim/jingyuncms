import { Op } from "sequelize"
import { MacRecommendConfigModel } from "../model/recommend_config"
import { RecommendListModel } from "../model/recommend_list"
import { logger } from "../utils/logger"
// import { response.success, error as response.error } from "../utils/response"
import response from "../utils/response"

/**
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询推荐配置列表
 */
export const configList = async ({
  keyword = '',
  pageNo = 1,
  pageSize = 10,
}) => {
  try {
    const { count = 0, rows = [] } = await MacRecommendConfigModel.findAndCountAll({
      attributes: [
        'id',
        'sort',
        'configType',
        'configName',
        'styleType',
        'styleName',
        'recommendName',
        'recommendIcon',
        'createTime',
        'updateTime',
      ],
      where: {
        recommendName: {
          [Op.like]: `%${keyword.trim()}%`
        },
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize * (pageNo - 1)),
    })

    return response.success(
      200,
      {
        total: count,
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)

    return response.error(500, {}, error)
  }
}

/**
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} styleType 0 轮播 | 1 正在热播 | 2 推荐
 * @param {string} recommendName 推荐名称
 * @param {string} recommendIcon 推荐icon
 * @param {string} createAuthorId 创建配置项用户ID
 * @param {string} createAuthorName 创建配置项用户名称
 * @description 推荐配置添加
 */
export const addConfig = async (params) => {
  try {
    const data = await MacRecommendConfigModel.create({
      id: params.id,
      sort: params.sort,
      configType: params.configType,
      styleType: params.styleType,
      recommendName: params.recommendName,
      recommendIcon: params.recommendIcon,
      updateAuthorId: params.updateAuthorId,
      updateAuthorName: params.updateAuthorName,
    })

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**
 * @param {number} id 配置id
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} styleType 0 轮播 | 1 正在热播 | 2 推荐
 * @param {string} recommendName 推荐名称
 * @param {string} recommendIcon 推荐icon
 * @param {string} updateAuthorId 更新配置项用户ID
 * @param {string} updateAuthorName 更新配置项用户名称
 * @description 编辑推荐配置
 */
export const editConfig = async ({ id, ...params }) => {
  try {
    const data = await MacRecommendConfigModel.update(
      {
        sort: params.sort,
        configType: params.configType,
        styleType: params.styleType,
        recommendName: params.recommendName,
        recommendIcon: params.recommendIcon,
        updateAuthorId: params.updateAuthorId,
        updateAuthorName: params.updateAuthorName,
      },
      {
        where: {
          id,
        }
      }
    )

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**
 * @param {number} id id
 * @description 删除推荐配置
 */
export const delConfig = async ({ id }) => {
  try {
    const data = await MacRecommendConfigModel.destroy(
      {
        where: {
          id,
          is_delete: '0',
        }
      }
    )

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**

 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 视频关联配置列表
 */
export const bindConfiglist = async ({
  configId,
  pageNo = 1,
  pageSize = 10,
}) => {
  try {
    const { count = 0, rows = [] } = await RecommendListModel.findAndCountAll({
      where: {
        configId: configId,
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize * (pageNo - 1)),
    })

    return response.success(
      200,
      {
        total: count,
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**
 * @param {string} userId 更新配置项用户ID
 * @param {string} username 更新配置项用户名称
 * @param {number} configId 推荐ID
 * @param {number} sort 排序
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} styleType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {number} vodId 视频ID
 * @param {string} vodName 视频名称
 * @param {string} imgUrl 视频封面
 * @param {number} vodTotal 总集数
 * @param {string} vodSerial 连载数
 * @description 推荐配置绑定视频
 */
export const addBindConfig = async (params) => {
  try {
    const {
      configId,
      vodId,
      vodName,
      categoryId,
      imgUrl,
      vodArea,
      vodYear,
      vodTotal,
      vodContent,
      vodActor,
      updateAuthorId,
      updateAuthorName,
      vodRemarks
    } = params

    const data = await RecommendListModel.create({
      configId,
      vodId,
      vodName,
      categoryId,
      imgUrl,
      vodArea,
      vodYear,
      vodTotal,
      vodContent,
      vodActor,
      vodRemarks,
      updateAuthorId,
      updateAuthorName,
    })

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**
 * @param {number} id id
 * @param {string} userId 更新配置项用户ID
 * @param {string} username 更新配置项用户名称
 * @param {number} configId 推荐ID
 * @param {number} sort 排序
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} styleType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {number} vodId 视频ID
 * @param {string} vodName 视频名称
 * @param {string} imgUrl 视频封面
 * @param {number} vodTotal 总集数
 * @param {string} vodSerial 连载数
 * @description 编辑推荐配置绑定视频
 */
export const editBindConfig = async ({
  id,
  sort,
  vodId,
  vodName,
  categoryId,
  imgUrl,
  vodArea,
  vodYear,
  vodTotal,
  vodContent,
  vodActor,
  vodRemarks,
  updateAuthorId,
  updateAuthorName,
}) => {
  try {
    const data = await RecommendListModel.update(
      {
        sort,
        vodId,
        vodName,
        categoryId,
        imgUrl,
        vodArea,
        vodYear,
        vodTotal,
        vodContent,
        vodActor,
        vodRemarks,
        updateAuthorId,
        updateAuthorName,
      },
      {
        where: {
          id,
        }
      }
    )

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}

/**
 * @param {number} id id
 * @description 删除推荐配置绑定视频
 */
export const delBind = async ({ id }) => {
  try {
    const data = await RecommendListModel.destroy(
      {
        where: {
          id,
        }
      }
    )

    return response.success(200)
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}
