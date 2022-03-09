const Router = require('koa-router')
const { getVideoData } = require('../../controllers/douban')

const router = new Router({
  prefix: '/douban'
})

/**
 * 
 * @param {string} id 豆瓣ID
 * @description 利用爬虫获取视频数据
 */
router.get('/getVideoData', async (ctx, next) => {
  const { id } = ctx.query

  const data = await getVideoData({ id })

  ctx.body = data
})

module.exports = {
  commonRouter: router
}