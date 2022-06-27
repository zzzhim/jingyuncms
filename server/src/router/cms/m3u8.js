import Router from 'koa-router'
import { m3u8List, m3u8Add, m3u8Edit, m3u8Del } from '../../controllers/cms/m3u8'
import { commomIdValidate } from '../../validate/common'

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
    pageNo,
    pageSize,
  } = ctx.query

  const data = await m3u8List({
    fileName,
    vodName,
    doubanId,
    pageNo: pageNo,
    pageSize: pageSize,
  })

  ctx.body = data
})

/**
 * 
 * @param {string} fileName 文件名称
 * @param {string} fileUrl 文件地址
 * @param {string} vodName 视频名称
 * @param {string} remarks 备注
 * @param {number} doubanId 豆瓣ID
 * @description 上传m3u8视频
 */
router.post('/add', async (ctx, next) => {
  const {
    fileName,
    fileUrl,
    vodName,
    remarks,
    doubanId,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await m3u8Add({
    fileName,
    fileUrl,
    vodName,
    remarks,
    doubanId,
    userId,
    username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} id
 * @param {string} fileName 文件名称
 * @param {string} fileUrl 文件地址
 * @param {string} vodName 视频名称
 * @param {string} remarks 备注
 * @param {number} doubanId 豆瓣ID
 * @description 编辑m3u8视频
 */
router.post('/edit', async (ctx, next) => {
  const {
    id,
    fileName,
    fileUrl,
    vodName,
    remarks,
    doubanId,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await m3u8Edit({
    id,
    fileName,
    fileUrl,
    vodName,
    remarks,
    doubanId,
    userId,
    username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} id
 * @description 删除m3u8视频
 */
router.post('/del', commomIdValidate, async (ctx, next) => {
  const { id } = ctx.request.body

  const data = await m3u8Del({ id })

  ctx.body = data
})

export const m3u8Router = router