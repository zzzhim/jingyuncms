import Router from 'koa-router'
import {
  videoCategoryTree,
  addVideoCategory,
  editVideoCategory,
  delVideoCategory,
  bindInterfaceList,
  bindInterfaceAdd,
  categoryList,
} from '../../controllers/cms/category'

const router = new Router({
  prefix: '/category'
})

/**
 * 
 * @description 获取分类列表
 */
router.get('/list', async (ctx, next) => {
  const data = await categoryList({})

  ctx.body = data
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
    parentId = 0,
    categoryName,
    status,
  } = ctx.request.body
  const params = {}

  if (sort) {
    params.sort = sort
  }

  if (parentId != null && parentId != undefined) {
    params.parentId = parentId
  }

  if (status) {
    params.status = status
  }

  const data = await addVideoCategory({ ...params, categoryName, status })

  ctx.body = data
})

/**
 * 
 * @description 编辑视频分类
 */
router.post('/video/edit', async (ctx) => {
  const {
    id,
    sort = 0,
    parentId,
    categoryName,
    status,
  } = ctx.request.body
  const params = {}

  if (sort) {
    params.sort = sort
  }

  if (parentId != null && parentId != undefined) {
    params.parentId = parentId
  }

  if (status) {
    params.status = status
  }

  const data = await editVideoCategory({ ...params, categoryName, id })

  ctx.body = data
})

/**
 * 
 * @description 删除视频分类
 */
router.post('/video/del', async (ctx) => {
  const { id } = ctx.request.body

  const res = await delVideoCategory({ id })

  ctx.body = res
})

/**
 * 
 * @description 指定接口分类绑定列表
 */
router.get('/bind/interface/list', async (ctx) => {
  const { id } = ctx.query

  const res = await bindInterfaceList({ id })

  ctx.body = res
})

/**
 * 
 * @description 绑定指定接口分类
 */
router.post('/bind/interface/add', async (ctx) => {
  const {
    interfaceId,
    interfaceCategoryId,
    interfaceCategoryName,
    bindVideoCategoryId,
    bindVideoCategoryName,
  } = ctx.request.body

  const data = await bindInterfaceAdd({
    interfaceId,
    interfaceCategoryId,
    interfaceCategoryName,
    bindVideoCategoryId,
    bindVideoCategoryName
  })

  ctx.body = data
})

export const categoryRouter = router
