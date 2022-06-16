import { VodModel } from '../../model/vod'
import response from '../../utils/response'
import { logger } from '../../utils/logger'

/**
 *
 * @param {number} typeId 分类id
 * @param {number} typeId1 一级分类id
 * @param {string} typeName 分类名
 * @param {string} vodName 视频名
 * @param {string} vodName 视频名
 * @param {number} vodYear 年代
 * @param {number} pageSize 页数
 * @description 查询视频
 */
export const videoList = async ({ pageNo = 1, pageSize = 10, ...obj }) => {
  try {
    const { count = 0, rows = [] } = await VodModel.findAndCountAll({
      where: {},
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
    console.log(error)
    logger.error(error)
    return response.error(500)
  }
}