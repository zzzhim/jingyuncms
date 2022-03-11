import Router from 'koa-router'
import { videoCategoryTree, addVideoCategory } from '../../controllers/category'

const router = new Router({
  prefix: '/category'
})

/**
 * 
 * @description 视频分类树
 */
router.get('/video/tree', async (ctx) => {
  const data = await videoCategoryTree({})

  ctx.body = data
})

/**
 * 
 * @description 添加视频分类
 */
router.post('/video/add', async (ctx) => {
  const {
    sort = 0,
    parentId,
    categoryName,
    status,
  } = ctx.request.body
  const params = {}

  if(sort) {
    params.sort = sort
  }

  if(parentId) {
    params.parentId = parentId
  }

  const data = await addVideoCategory({ ...params, categoryName, status })

  ctx.body = data
})

export const categoryRouter = router
