import Router from 'koa-router'
import {
  maccmsCollection,
} from '../../controllers/collection'

const router = new Router({
  prefix: '/collection'
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
