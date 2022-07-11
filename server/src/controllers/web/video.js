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
      attributes: [
        "id",
        "vodId",
        "categoryId",
        "vodName",
        "vodNamePinYin",
        "vodSub",
        "vodWeight",
        "vodEn",
        "vodStatus",
        "vodLetter",
        "vodColor",
        "vodTag",
        "vodClass",
        "vodPic",
        "vodActor",
        "vodDirector",
        "vodWriter",
        "vodBehind",
        "vodBlurb",
        "vodRemarks",
        "vodPubdate",
        "vodTotal",
        "vodSerial",
        "vodTv",
        "vodWeekday",
        "vodArea",
        "vodLang",
        "vodYear",
        "vodVersion",
        "vodState",
        "vodAuthor",
        "vodIsend",
        "vodLock",
        "vodLevel",
        "vodCopyright",
        "vodPoints",
        "vodHits",
        "vodHitsDay",
        "vodHitsWeek",
        "vodHitsMonth",
        "vodDuration",
        "vodUp",
        "vodDown",
        "vodScore",
        "vodScoreAll",
        "vodScoreNum",
        "vodTimeHits",
        "vodTimeMake",
        "vodTrysee",
        "vodDoubanId",
        "vodDoubanScore",
        "vodRelArt",
        "vodContent",
        "vodPlayFrom",
        "vodPlayNote",
        "vodPlayUrl",
        // "vodPlayUrlList",
        "isDelete",
        "createdAt",
        "updatedAt",
      ],
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