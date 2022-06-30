import { VodModel } from '../../model/vod'
import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { Op } from 'sequelize'

/**
 *
 * @param {string} vodName 视频名
 * @param {number} categoryId 分类Id
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询视频
 */
export const videoList = async (params) => {
  try {
    const {
      vodName,
      category = '',
      order = '1',
      pageNo = '1',
      pageSize = '10',
    } = params

    const categoryList = category.split(",").filter(item => item.length > 0)

    let param = {}

    if(categoryList.length > 0) {
      param.categoryId = {
        [Op.or]: categoryList.map(item => parseInt(item))
      }
    }

    const { count = 0, rows = [] } = await VodModel.findAndCountAll({
      where: {
        vodName: {
          [Op.like]: `%${vodName || ''}%`,
        },
        ...param,
        isDelete: "0",
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNo) - 1),
      order: [
        [ 'updatedAt', order === '1' ? 'DESC' : 'ASC' ]
      ]
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
 *
 * @param {string} id 视频id
 * @description 查询视频详情
 */
export const videoDetail = async (params) => {
  try {
    const { id } = params

    const data = await VodModel.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
        isDelete: "0",
      },
    })

    return response.success(
      200,
      data
    )
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}