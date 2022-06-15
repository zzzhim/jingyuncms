import Router from 'koa-router'
import { RecommendList } from '../../controllers/recommend'
import { webValidateTokenMiddleware } from '../../middleware/webValidateToken'
import { verifyToken } from '../../utils/token'

const router = new Router({
  prefix: '/recommend'
})


/**
 * @param {number} id id
 * @description 获取推荐视频列表
 */
router.get('/list', webValidateTokenMiddleware, async (ctx, next) => {
  const data = await RecommendList({})

  ctx.body = data
})

export const recommendRouter = router