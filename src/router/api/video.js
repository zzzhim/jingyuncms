import Router from 'koa-router'
import {
  videoList,
  videoAdd,
} from '../../controllers/video'
import { commomIdValidate } from '../../validate/common'

const router = new Router({
  prefix: "/video"
})

/**
 * @param {number} typeId 分类id
 * @param {number} typeId1 一级分类id
 * @param {string} typeName 分类名
 * @param {string} vodName 视频名
 * @param {string} vodName 视频名
 * @param {number} vodYear 年代
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 视频列表
 */
router.get('/list', async (ctx, next) => {
  const {
    typeId,
    typeId1,
    typeName,
    vodName,
    vodYear,
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await videoList({
    typeId,
    typeId1,
    typeName,
    vodName,
    vodYear,
    pageNo,
    pageSize
  })

  ctx.body = data
})

/**
 *
 * @description 添加视频
 */
router.post('/add', async (ctx, next) => {
  const {
    vodId,
    typeId,
    vodName,
    vodSub,
    vodEn,
    vodStatus,
    vodLetter,
    vodColor,
    vodTag,
    vodClass,
    vodPic,
    vodPicThumb,
    vodPicSlide,
    vodActor,
    vodDirector,
    vodWriter,
    vodBehind,
    vodBlurb,
    vodRemarks,
    vodPubdate,
    vodTotal,
    vodSerial,
    vodTv,
    vodWeekday,
    vodArea,
    vodLang,
    vodYear,
    vodVersion,
    vodState,
    vodAuthor,
    vodIsend,
    vodLock,
    vodLevel,
    vodCopyright,
    vodPoints,
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
    vodTimeHits,
    vodTrysee,
    vodDoubanId,
    vodDoubanScore,
    vodReurl,
    vodRelVod,
    vodRelArt,
    vodContent,
    vodPlayFrom,
    vodPlayNote,
    vodPlayUrl,
    vodPlot,
    vodPlotName,
    vodPlotDetail,
  } = ctx.query

  const data = await videoAdd({
    vodId,
    typeId,
    vodName,
    vodSub,
    vodEn,
    vodStatus,
    vodLetter,
    vodColor,
    vodTag,
    vodClass,
    vodPic,
    vodPicThumb,
    vodPicSlide,
    vodActor,
    vodDirector,
    vodWriter,
    vodBehind,
    vodBlurb,
    vodRemarks,
    vodPubdate,
    vodTotal,
    vodSerial,
    vodTv,
    vodWeekday,
    vodArea,
    vodLang,
    vodYear,
    vodVersion,
    vodState,
    vodAuthor,
    vodIsend,
    vodLock,
    vodLevel,
    vodCopyright,
    vodPoints,
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
    vodTimeHits,
    vodTrysee,
    vodDoubanId,
    vodDoubanScore,
    vodReurl,
    vodRelVod,
    vodRelArt,
    vodContent,
    vodPlayFrom,
    vodPlayNote,
    vodPlayUrl,
    vodPlot,
    vodPlotName,
    vodPlotDetail,
  })

  ctx.body = data
})

module.exports = {
  videoRouter: router
}