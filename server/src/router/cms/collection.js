import Router from 'koa-router'
import { maccmsCollection, collectionVideoSettingUpdate, collectionVideoSettingGet } from '../../controllers/cms/collection'

const router = new Router({
  prefix: '/collection'
})

/**
 * 
 * @description 获取采集视频配置
 */
router.get('/video/setting', async (ctx) => {
  const data = await collectionVideoSettingGet({})

  ctx.body = data
})

/**
 * 
 * @description 修改采集视频配置
 */
router.post('/video/setting/edit', async (ctx) => {
  const {
    status,
    createPinYin,
    createWeight,
    vodNameSynonymReplace,
    descSynonymReplace,
    traditionalizeEnable,
    descDecorateState,
    collectionVideoActive,
    coolectionVideoContentUpdateActive,
    contentFilter,
  } = ctx.request.body

  const data = await collectionVideoSettingUpdate({
    status,
    createPinYin,
    createWeight,
    vodNameSynonymReplace,
    descSynonymReplace,
    traditionalizeEnable,
    descDecorateState,
    collectionVideoActive,
    coolectionVideoContentUpdateActive,
    contentFilter,
  })

  ctx.body = data
})

/**
 * 
 * @description macms采集视频
 */
router.post('/maccms/video', async (ctx) => {
  const { id, h } = ctx.request.body

  const data = await maccmsCollection({ id, h })

  ctx.body = data
})

export const collectionRouter = router
