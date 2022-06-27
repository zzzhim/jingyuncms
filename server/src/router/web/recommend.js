import Router from 'koa-router'
import { recommendList } from '../../controllers/web/recommend'

const router = new Router({
  prefix: '/recommend'
})

/**
 * @param {number} id id
 * @description 获取推荐视频列表
 */
router.get('/list', async (ctx, next) => {
  const data = await recommendList()

  ctx.body = data
})

export const recommendRouter = router