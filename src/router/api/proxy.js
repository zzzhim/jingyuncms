import Router from 'koa-router'
import { maccmsApiProxy } from '../../controllers/proxy'

const router = new Router({
  prefix: '/proxy'
})

/**
 * 
 * @description 苹果cms接口转发
 */
router.post('/maccms', async (ctx) => {
  const { url, method = 'get', data = {}, params = {}, header } = ctx.request.body

  const res = await maccmsApiProxy({ url, method, data, params, header })

  ctx.body = res
})

export const proxyRouter = router
