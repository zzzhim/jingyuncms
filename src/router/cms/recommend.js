import Router from 'koa-router'
import { RecommendList } from '../../controllers/recommend'

const router = new Router({
  prefix: '/recommend'
})


/**
 * @param {number} id id
 * @description 获取推荐视频列表
 */
router.get('/list', async (ctx, next) => {

  const data = await RecommendList({})

  ctx.body = data
})

export const recommendRouter = router