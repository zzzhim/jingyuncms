import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { Op } from 'sequelize'
import { VideoCategoryModel } from '../../model/videoCategory'
import sequelize from 'sequelize'

/**
 *
 * @description 查询视频分类列表
 */
export const categoryVideoList = async (params) => {
  try {
    const data = await VideoCategoryModel.findAll({
      where: {
        status: {
          [Op.eq]: '1',
        },
      },
      order: sequelize.col('sort')
    })

    return response.success(
      200,
      data
    )
  } catch (error) {
    logger.error(error)
    return response.error(500)
  }
}