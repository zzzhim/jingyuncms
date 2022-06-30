import Router from 'koa-router'
import { videoDetail, videoList } from '../../controllers/web/video'

const router = new Router({
  prefix: '/video'
})

/**
 * @param {string} vodName 视频名
 * @param {string} category 分类Id
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 获取推荐视频列表
 */
router.get('/list', async (ctx, next) => {
  const { vodName, category, order, pageNo, pageSize } = ctx.request.query
  const data = await videoList({ vodName, category, order, pageNo, pageSize })

  ctx.body = data
})


/**
 * @param {number} id 视频名称
 * @description 获取视频详情
 */
router.get('/detail', async (ctx, next) => {
  const { id } = ctx.request.query
  const data = await videoDetail({ id })

  ctx.body = data
})

export const videoRouter = router