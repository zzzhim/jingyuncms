import Router from 'koa-router'
import { uploadImgConfigList, uploadImgConfigAdd, uploadImgConfigEdit, uploadImgConfigDel } from '../../controllers/cms/upload'

const router = new Router({
  prefix: '/upload'
})

/**
 * 
 * @description 上传配置列表
 */
router.get('/config/img/list', async (ctx) => {
  const data = await uploadImgConfigList({})

  ctx.body = data
})

/**
 * 
 * @description 添加配置
 */
router.post('/config/img/add', async (ctx) => {
  const {
    configName,
    baseUrl,
    url,
    fileParamName,
    addParam,
    headers,
    result,
    paramType,
    remarks,
  } = ctx.request.body

  const data = await uploadImgConfigAdd({
    configName,
    baseUrl,
    url,
    fileParamName,
    addParam,
    headers,
    result,
    paramType,
    remarks,
  })

  ctx.body = data
})

/**
 * 
 * @description 修改配置
 */
router.post('/config/img/edit', async (ctx) => {
  const {
    id,
    configName,
    baseUrl,
    url,
    fileParamName,
    addParam,
    headers,
    result,
    paramType,
    remarks,
    status,
  } = ctx.request.body

  const data = await uploadImgConfigEdit({
    id,
    configName,
    baseUrl,
    url,
    fileParamName,
    addParam,
    headers,
    result,
    paramType,
    remarks,
    status,
  })

  ctx.body = data
})

/**
 * 
 * @description 删除配置
 */
router.post('/config/img/del', async (ctx) => {
  const { id } = ctx.request.body

  const data = await uploadImgConfigDel({ id })

  ctx.body = data
})
export const uploadRouter = router
