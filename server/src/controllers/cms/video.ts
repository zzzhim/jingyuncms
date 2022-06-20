import { VodModel } from '../../model/vod'
import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { BindCategoryModel } from '../../model/bindCategory'
import { socketIo } from '../../socket'
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
  pageNo = 1,
  pageSize = 10,
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
 *
 * @description 添加视频
 */
export const videoAdd = async (params) => {
  try {
    const category = await BindCategoryModel.findAll({
      where: {
        interfaceId: params.interfaceId,
      }
    })

    let list = params.list.map(item => {
      const find = category.find(ele => {
        return ele.getDataValue('interfaceCategoryId') == item.type_id
      })

      if (find) {
        return {
          ...item,
          categoryId: find.getDataValue('bindVideoCategoryId'),
          is_bind_category: true
        }
      } else {
        return {
          ...item,
          is_bind_category: false
        }
      }
    })

    // list = list.filter(item => item != false)

    // 批量添加视频数据
    // await VodModel.bulkCreate(list)

    list.forEach(async element => {
      if (element.is_bind_category) {
        const obj = {}
        for (const key in element) {
          obj[underlineToHump(key)] = element[key]
        }

        try {
          await VodModel.findOrCreate({
            where: {
              vodName: element.vod_name
            },
            defaults: obj,
          })
        } catch (error) {
          logger.error(error)
        }

        socketIo.emit('logs', {
          type: 'collection',
          taskType: 'maccms',
          message: '采集视频完毕',
          data: {
            log: `<span style="color: #67C23A;">采集视频成功</span> -> 分类ID: ${element.type_id} 分类名称: ${element.type_name} 视频名称:${element.vod_name} `
          }
        })
      } else {
        socketIo.emit('logs', {
          type: 'collection',
          taskType: 'maccms',
          message: '采集视频失败',
          data: {
            log: `<span style="color: #E6A23C;">采集视频失败</span> -> 分类ID: ${element.type_id} 分类名称: ${element.type_name} 视频名称:${element.vod_name} <span style="color: #F56C6C;">未绑定分类</span>`
          }
        })
      }
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500)
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
    return response.error(500)
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
    return response.error(500)
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
    return response.error(500)
  }
}
