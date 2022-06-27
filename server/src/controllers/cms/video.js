import { VodModel } from '../../model/vod'
import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { BindCategoryModel } from '../../model/bindCategory'
// import { socketIo } from '../../socket'
import { underlineToHump } from '../../utils/underlineToHump'
import { Op } from 'sequelize'

/**
 *
 * @param {string} vodName 视频名
 * @param {number} categoryId 分类Id
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询视频
 */
export const videoList = async ({
  vodName,
  categoryId,
  pageNo = '1',
  pageSize = '10',
}) => {
  try {
    const { count = 0, rows = [] } = await VodModel.findAndCountAll({
      where: {
        vodName: {
          [Op.like]: `%${vodName || ''}%`,
        },
        categoryId: {
          [Op.like]: `%${categoryId || ''}%`,
        },
        isDelete: "0",
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize) * (parseInt(pageNo) - 1),
      order: [
        // 将转义 title 并针对有效方向列表进行降序排列
        ['updated_at', 'DESC'],
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
 * @description 添加视频
 */
export const videoAdd = async (params) => {
  try {
    const {
      vodName,
      categoryId,
      vodSub,
      vodStatus,
      vodTag,
      vodPic,
      vodBlurb,
      vodRemarks,
      vodTotal,
      vodYear,
      vodState,
      vodIsend,
      vodCopyright,
      vodHits,
      vodHitsDay,
      vodHitsWeek,
      vodHitsMonth,
      vodDuration,
      vodUp,
      vodDown,
      vodScore,
      vodScoreAll,
      vodScoreNum,
      vodTrysee,
      vodDoubanId,
      vodDoubanScore,
      vodContent,
      vodNotes,
      vodPlayFrom,
      vodPlayNote,
      vodPlayUrl,
    } = params

    await VodModel.create({
      vodName,
      categoryId,
      vodSub,
      vodStatus,
      vodTag,
      vodPic,
      vodBlurb,
      vodRemarks,
      vodTotal,
      vodYear,
      vodState,
      vodIsend,
      vodCopyright,
      vodHits,
      vodHitsDay,
      vodHitsWeek,
      vodHitsMonth,
      vodDuration,
      vodUp,
      vodDown,
      vodScore,
      vodScoreAll,
      vodScoreNum,
      vodTrysee,
      vodDoubanId,
      vodDoubanScore,
      vodContent,
      vodNotes,
      vodPlayFrom,
      vodPlayNote,
      vodPlayUrl,
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}

/**
 *
 * @description 批量添加视频
 */
 export const videoAddList = async (params) => {
  try {
    const { list } = params

    await VodModel.bulkCreate(list)

    return response.success(200, {})

  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}

/**
 *
 * @description 编辑视频
 */
export const videoEdit = async (params) => {
  try {
    const {
      id,
      vodName,
      categoryId,
      vodSub,
      vodStatus,
      vodTag,
      vodPic,
      vodBlurb,
      vodRemarks,
      vodTotal,
      vodYear,
      vodState,
      vodIsend,
      vodCopyright,
      vodHits,
      vodHitsDay,
      vodHitsWeek,
      vodHitsMonth,
      vodDuration,
      vodUp,
      vodDown,
      vodScore,
      vodScoreAll,
      vodScoreNum,
      vodTrysee,
      vodDoubanId,
      vodDoubanScore,
      vodContent,
      vodNotes,
      vodPlayFrom,
      vodPlayNote,
      vodPlayUrl,
    } = params

    await VodModel.update(
      {
        vodName,
        categoryId,
        vodSub,
        vodStatus,
        vodTag,
        vodPic,
        vodBlurb,
        vodRemarks,
        vodTotal,
        vodYear,
        vodState,
        vodIsend,
        vodCopyright,
        vodHits,
        vodHitsDay,
        vodHitsWeek,
        vodHitsMonth,
        vodDuration,
        vodUp,
        vodDown,
        vodScore,
        vodScoreAll,
        vodScoreNum,
        vodTrysee,
        vodDoubanId,
        vodDoubanScore,
        vodContent,
        vodNotes,
        vodPlayFrom,
        vodPlayNote,
        vodPlayUrl,
      },
      {
        where: {
          id: id,
        }
      })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}

/**
 *
 * @param {number} id 视频Id
 * @description 删除视频
 */
export const videoDel = async ({ id }) => {
  try {
    await VodModel.destroy({
      where: {
        id
      }
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}

/**
 *
 * @description 视频入库
 */
export const videoWarehousing = async (params) => {
  try {
    try {
      await VodModel.create({ ...params })
    } catch (error) {
      logger.error(error)
    }

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}
