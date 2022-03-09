import Router from 'koa-router'
import { getDoubanVideoData } from '../../controllers/douban'

const router = new Router({
  prefix: '/douban'
})

/**
 * 
 * @param {string} id 豆瓣ID
 * @description 利用爬虫获取视频数据
 */
router.get('/getDoubanVideoData', async (ctx) => {
  const { doubanId } = ctx.query

  const data = await getDoubanVideoData({ doubanId })

  ctx.body = data
})

export const doubanRouter = router
