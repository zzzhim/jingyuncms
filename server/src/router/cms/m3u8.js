import Router from 'koa-router'
import { m3u8List } from '../../controllers/cms/m3u8'

const router = new Router({
  prefix: "/m3u8"
})

/**
 * 
 * @param {string} fileName 文件名称
 * @param {string} vodName 视频名称
 * @param {number} doubanId 豆瓣ID
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description m3u8列表
 */
router.get('/list', async (ctx, next) => {
  const {
    fileName = '',
    vodName = '',
    doubanId,
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await m3u8List({
    fileName,
    vodName,
    doubanId,
    pageNo,
    pageSize
  })

  ctx.body = data
})

export const m3u8Router = router