import { VodModel } from '../../model/vod'
import response from '../../utils/response'
import { logger } from '../../utils/logger'
// import { socketIo } from '../../socket'
import { Op } from 'sequelize'
import { getCollectionVideoSetting } from '../../model/collectionVideoSetting'
import { doSegment, extract, pinyinify, traditionalize } from '../../utils/segment'

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
  vodPlayFrom,
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
        vodPlayFrom: {
          [Op.like]: `%${vodPlayFrom || ''}%`,
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

    // await VodModel.bulkCreate(list)

    // return response.success(200, {})
    return await videoWarehousing({ list })
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
 * @description 视频批量入库
 */
export const videoWarehousing = async ({ list }) => {
  try {
    const collectionVideoSetting = getCollectionVideoSetting()

    // 循环入库
    for (let index = 0; index < list.length; index++) {
      const item = list[index]

      // where 参数
      const whereParams = {
        vodName: item.vodName // 查询 视频名称
      }

      collectionVideoSetting.collectionVideoActive.split(",").forEach((val) => {
        if(val === '1') { // 查询分类id
          whereParams.categoryId = item.categoryId
        }else if(val === "2") { // 查询年份
          whereParams.vodYear = item.vodYear
        }
      })

      const [ data, created ] = await VodModel.findOrCreate({
        where: {
          vodName: item.vodName
        },
        defaults: {
          vodId: item.vodId,
          categoryId: item.categoryId,
          vodName: item.vodName,
          vodNamePinYin: item.vodNamePinYin,
          vodSub: item.vodSub,
          vodWeight: item.vodWeight,
          vodEn: item.vodEn,
          vodStatus: item.vodStatus,
          vodLetter: item.vodLetter,
          vodColor: item.vodColor,
          vodTag: item.vodTag,
          vodClass: item.vodClass,
          vodPic: item.vodPic,
          vodActor: item.vodActor,
          vodDirector: item.vodDirector,
          vodBehind: item.vodBehind,
          vodBlurb: item.vodBlurb,
          vodRemarks: item.vodRemarks,
          vodPubdate: item.vodPubdate,
          vodTotal: item.vodTotal,
          vodSerial: item.vodSerial,
          vodTv: item.vodTv,
          vodWeekday: item.vodWeekday,
          vodArea: item.vodArea,
          vodLang: item.vodLang,
          vodYear: item.vodYear,
          vodVersion: item.vodVersion,
          vodState: item.vodState,
          vodAuthor: item.vodAuthor,
          vodIsend: item.vodIsend,
          vodLock: item.vodLock,
          vodLevel: item.vodLevel,
          vodCopyright: item.vodCopyright,
          vodPoints: item.vodPoints,
          vodHits: item.vodHits,
          vodHitsDay: item.vodHitsDay,
          vodHitsWeek: item.vodHitsWeek,
          vodHitsMonth: item.vodHitsMonth,
          vodDuration: item.vodDuration,
          vodUp: item.vodUp,
          vodDown: item.vodDown,
          vodScore: item.vodScore,
          vodScoreAll: item.vodScoreAll,
          vodScoreNum: item.vodScoreNum,
          vodTimeHits: item.vodTimeHits,
          vodTimeMake: item.vodTimeMake,
          vodTrysee: item.vodTrysee,
          vodDoubanId: item.vodDoubanId,
          vodDoubanScore: item.vodDoubanScore,
          vodRelArt: item.vodRelArt,
          vodContent: item.vodContent,
          vodPlayFrom: item.vodPlayFrom,
          vodPlayNote: item.vodPlayNote,
          vodPlayUrl: item.vodPlayUrl,
        },
      })

      // 审核状态
      data.vodStatus = collectionVideoSetting.status

      // false 已存在 true 新创建
      if(!created) { // 已存在二次更新
        collectionVideoSetting.coolectionVideoContentUpdateActive.split(",").forEach((val) => {
          switch (val) {
            case "1": // 更新图片
              whereParams.vodPic = item.vodPic
              break;
            case "2": // 更新播放地址
              whereParams.vodPlayFrom = item.vodPlayFrom
              whereParams.vodPlayNote = item.vodPlayNote
              whereParams.vodPlayUrl = item.vodPlayUrl
              break;
            case "3": // 更新连载数
              whereParams.vodSerial = item.vodSerial
              break;
            case "4": // 更新备注
              whereParams.vodPlayNote = item.vodPlayNote
              break;
            case "5": // 更新详细介绍
              whereParams.vodContent = item.vodContent
              break;
            case "6": // 更新简介
              whereParams.vodBlurb = item.vodBlurb
              break;
            default:
              break;
          }
        })
      }

      // 生成拼音
      if(collectionVideoSetting.createPinYin === "1") {
        data.vodNamePinYin = pinyinify(item.vodName)
      }

      // 简介生成关键词
      if(collectionVideoSetting.createWeight === "1") {
        const list = extract(item.vodBlurb)
        data.vodWeight = list.map(item => item.word).join(",")
      }

      // 视频名称是否替换同义词
      if(collectionVideoSetting.vodNameSynonymReplace === "1") {
        const list = doSegment(item.vodName)

        data.vodName = list.join("")
      }

      // 视频简介是否替换同义词
      if(collectionVideoSetting.descSynonymReplace === "1") {
        const list = doSegment(item.vodBlurb)

        data.vodBlurb = list.join("")
      }

      // 传统化生成繁体
      if(collectionVideoSetting.traditionalizeEnable === "1") {
        data.vodName = traditionalize(data.vodName)
        data.vodWeight = traditionalize(data.vodWeight)
        data.vodBlurb = traditionalize(data.vodBlurb)
      }

      await data.save()
    }

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}