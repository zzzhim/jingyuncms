import Router from 'koa-router'
import { RecommendList } from '../../controllers/recommend'

const router = new Router({
  prefix: '/recommend'
})


/**
 * @param {number} id id
 * @description 删除视频关联配置
 */
router.get('/list', async (ctx, next) => {

  const data = await RecommendList({})

  ctx.body = data
})

export const recommendRouter = router