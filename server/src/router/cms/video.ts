import Router from 'koa-router'
import {
  videoList,
  videoAdd,
  videoWarehousing,
  videoDel,
  videoEdit,
} from '../../controllers/cms/video'
import { commomIdValidate } from '../../validate/common'

const router = new Router({
  prefix: "/video"
})

/**
 * @param {string} vodName 视频名
 * @param {number} categoryId 分类Id
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 视频列表
 */
router.get('/list', async (ctx, next) => {
  const {
    vodName,
    categoryId,
    pageNo,
    pageSize,
  } = ctx.query

  const data = await videoList({
    vodName,
    categoryId,
    pageNo: pageNo as unknown as number,
    pageSize: pageSize as unknown as number,
  })

  ctx.body = data
})

/**
 *
 * @description 添加视频
 */
router.post('/add', async (ctx, next) => {
  const { list, interfaceId } = ctx.request.body

  const data = await videoAdd({ list, interfaceId })

  ctx.body = data
})

/**
 *
 * @description 编辑视频
 */
router.post('/edit', async (ctx, next) => {
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
  } = ctx.request.body

  const data = await videoEdit({
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
  })

  ctx.body = data
})

/**
 *
 * @param {nubmer} id 视频Id
 * @description 删除视频
 */
router.post('/del', commomIdValidate, async (ctx, next) => {
  const { id } = ctx.request.body

  const data = await videoDel({ id })

  ctx.body = data
})

/**
 *
 * @description 视频入库
 */
router.post('/warehousing', async (ctx, next) => {
  const { params } = ctx.request.body

  const data = await videoWarehousing({ ...params })

  ctx.body = data
})

export const videoRouter = router
