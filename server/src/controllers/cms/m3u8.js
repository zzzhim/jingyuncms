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
export const m3u8List = async ({
  fileName,
  vodName,
  doubanId,
  pageNo = '1',
  pageSize = '10'
}) => {
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
      offset: parseInt(pageSize) * (parseInt(pageNo) - 1),
      order: [
        [ 'updatedAt', 'DESC' ],
        [ 'id', 'DESC' ],
      ],
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
 * 
 * @param {string} fileName 文件名称
 * @param {string} fileUrl 文件地址
 * @param {string} vodName 视频名称
 * @param {string} remarks 备注
 * @param {number} doubanId 豆瓣ID
 * @description 上传m3u8视频
 */
export const m3u8Add = async ({
  fileName,
  fileUrl,
  vodName,
  remarks,
  doubanId,
  userId,
  username,
}) => {
  try {
    await M3u8Model.create({
      fileName,
      fileUrl,
      vodName,
      remarks,
      doubanId,
      userId,
      username,
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @param {number} id
 * @param {string} fileName 文件名称
 * @param {string} fileUrl 文件地址
 * @param {string} vodName 视频名称
 * @param {string} remarks 备注
 * @param {number} doubanId 豆瓣ID
 * @description 编辑m3u8视频
 */
export const m3u8Edit = async ({
  id,
  fileName,
  fileUrl,
  vodName,
  remarks,
  doubanId,
  userId,
  username,
}) => {
  try {
    await M3u8Model.update(
      {
        fileName,
        fileUrl,
        vodName,
        remarks,
        doubanId,
        userId,
        username,
      },
      {
        where: {
          id,
        }
      }
    )

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @param {number} id
 * @description 删除m3u8视频
 */
export const m3u8Del = async ({ id }) => {
  try {
    await M3u8Model.destroy({
      where: {
        id,
      }
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

