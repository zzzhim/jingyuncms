import { Op } from "sequelize"
import { InterfaceSetupModel } from "../model/Interface_setup"
import logger from "../utils/logger"
import response from "../utils/response"

/**
 * 
 * @param {string} keyword 关键字
 * @param {string} interfaceType 接口类型 1 视频 2 文章 3 图片
 * @param {string} cmsType cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms"
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询接口列表
 */
export const list = async ({
  keyword = '',
  interfaceType = '',
  cmsType = '',
  pageNo = 1,
  pageSize = 10,
}) => {
  try {
    const { count = 0, rows = [] } = await InterfaceSetupModel.findAndCountAll({
      where: {
        interface_name: {
          [ Op.like ]: `%${keyword.trim()}%`
        },
        interface_type: {
          [ Op.like ]: `%${interfaceType.trim()}%`
        },
        cms_type: {
          [ Op.like ]: `%${cmsType.trim()}%`
        },
        is_delete: '0',
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
      'interface_name': interfaceName,
      'interface_url': interfaceUrl,
      'interface_type': interfaceType,
      'response_type': responseType,
      'cms_type': cmsType,
    })
    
    return response.success(200, data)
  } catch (error) {
    logger.error(error)
    return response.success(500, {}, error)
  }
}
