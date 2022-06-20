import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { M3u8Model } from '../../model/m3u8'
import { Op } from 'sequelize'

/**
 *
 * @param {string} fileName 文件名称
 * @param {string} vodName 视频名称
 * @param {number} doubanId 豆瓣ID
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询m3u8列表
 */
export const m3u8List = async ({ fileName, vodName, doubanId, pageNo = 1, pageSize = 10 }) => {
  try {
    const { count = 0, rows = [] } = await M3u8Model.findAndCountAll({
      where: {
        fileName: {
          [Op.like]: `%${fileName || ''}%`,
        },
        vodName: {
          [Op.like]: `%${vodName || ''}%`,
        },
        doubanId: {
          [Op.like]: `%${doubanId || ''}%`,
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