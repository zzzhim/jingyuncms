import { MacVodModel } from '../model/vod'
import response from '../utils/response'
import { LetterNumtoLine } from '../utils/toLine'
import { Op } from 'sequelize'
import { logger } from '../utils/logger'
import { BindCategoryModel } from '../model/bind_category'
import { socketIo } from '../socket'
import { underlineToHump } from '../utils/underlineToHump'

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
    const params = {}

    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== undefined) {
        params[key] = {
          [ Op.like ]: `%${obj[key]}%`
        }
      }
    }

    const { count = 0, rows = [] } = await MacVodModel.findAndCountAll({
      attributes: [
        'id',
        'vodId',
        'vodName',
        'categoryId',
        'vodClass',
        'vodPic',
        'vodPlayFrom',
        'vodTime',
        'vodArea',
        'vodYear',
        'vodTotal',
        'vodContent',
        'vodActor',
        'vodRemarks',
      ],
      
      where: {
        ...params,
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
    console.log(error)
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

      if(find) {
        return {
          ...item,
          categoryId: find.getDataValue('bindVideoCategoryId'),
          is_bind_category: true
        }
      }else {
        return {
          ...item,
          is_bind_category: false
        }
      }
    })

    // list = list.filter(item => item != false)

    // 批量添加视频数据
    // await MacVodModel.bulkCreate(list)

    list.forEach(async element => {
      if(element.is_bind_category) {
        const obj = {}
        for (const key in element) {
          obj[underlineToHump(key)] = element[key]
        }

        try {
          await MacVodModel.findOrCreate({
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
      }else {
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
 * @description 视频入库
 */
export const videoWarehousing = async (params) => {
  try {
    try {
      await MacVodModel.create({ ...params })
    } catch (error) {
      logger.error(error)
    }

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500)
  }
}
