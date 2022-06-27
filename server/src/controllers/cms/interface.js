import axios from "axios"
import { Op } from "sequelize"
import { InterfaceSetupModel } from "../../model/InterfaceSetup"
import logger from "../../utils/logger"
import response from "../../utils/response"

/**
 * 
 * @param {string} interfaceName 接口名称
 * @param {string} interfaceType 接口类型 1 视频 2 文章 3 图片
 * @param {string} cmsType cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms"
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询接口列表
 */
export const list = async ({
  interfaceName = '',
  interfaceType = '',
  cmsType = '',
  pageNo = '1',
  pageSize = '10',
}) => {
  try {
    const { count = 0, rows = [] } = await InterfaceSetupModel.findAndCountAll({
      where: {
        interfaceName: {
          [ Op.like ]: `%${interfaceName.trim()}%`
        },
        interfaceType: {
          [ Op.like ]: `%${interfaceType.trim()}%`
        },
        cmsType: {
          [ Op.like ]: `%${cmsType.trim()}%`
        },
        isDelete: '0',
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNo) - 1),
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

    return response.error(500, {})
  }
}

/**
 * @param interfaceName 接口名称
 * @param interfaceUrl 接口地址
 * @param interfaceType 接口类型 1 视频 2 文章 3 图片
 * @param responseType 接口类型 1 json 2 xml
 * @param cmsType cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms
 * @description 添加自定义接口
 */
export const add = async ({
  interfaceName,
  interfaceUrl,
  interfaceType,
  responseType,
  cmsType,
}) => {
  try {
    const data = await InterfaceSetupModel.create({
      interfaceName,
      interfaceUrl,
      interfaceType,
      responseType,
      cmsType,
    })
    
    return response.success(200, data)
  } catch (error) {
    logger.error(error)
    return response.success(500, {}, error)
  }
}

/**
 * 
 * @param id
 * @param interfaceName 接口名称
 * @param interfaceUrl 接口地址
 * @param interfaceType 接口类型 1 视频 2 文章 3 图片
 * @param responseType 接口类型 1 json 2 xml
 * @param cmsType cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms
 * @description 编辑自定义接口
 */
export const edit = async ({
  id,
  interfaceName,
  interfaceUrl,
  interfaceType,
  responseType,
  cmsType,
}) => {
  try {
    const data = await InterfaceSetupModel.update(
      {
        interfaceName,
        interfaceUrl,
        interfaceType,
        responseType,
        cmsType,
      },
      {
        where: {
          id,
          isDelete: '0',
        }
      }
    )

    return response.success(200, data)
  } catch (error) {
    logger.error(error)
    return response.success(500, {}, error)
  }
}

/**
 * @param id
 * @description 删除自定义接口
 */
export const del = async ({ id }) => {
  try {
    const data = await InterfaceSetupModel.update(
      {
        isDelete: '1'
      },
      {
        where: {
          id,
          isDelete: '0',
        }
      }
    )

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.success(500, {}, error)
  }
}

/**
 * 
 * @description 采集苹果cms接口视频
 */
export const collectionMaccmsVideo = async (url) => {
  const res = await axios.get('https://www.qilinzyz.com/api.php/provide/vod/?ac=list&pg=1')

}