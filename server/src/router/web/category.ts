import Router from 'koa-router'
import { categoryVideoList } from '../../controllers/web/category'

const router = new Router({
  prefix: '/category'
})

/**
 * 
 * @description 获取视频分类列表
 */
router.get('/video', async (ctx, next) => {
  const data = await categoryVideoList()

  ctx.body = data
})

export const categoryRouter = router
