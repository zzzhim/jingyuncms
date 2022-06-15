import Router from 'koa-router'
import {
  videoList,
  videoAdd,
  videoWarehousing,
} from '../../controllers/video'

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
  const { list, interfaceId } = ctx.request.body

  const data = await videoAdd({ list, interfaceId })

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
