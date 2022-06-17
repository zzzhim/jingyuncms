import Router from "koa-router"
import { add, list, edit, del } from "../../controllers/cms/interface"

const router = new Router({
  prefix: '/interface'
})

router.get('/list', async (ctx) => {
  const {
    interfaceName,
    interfaceType,
    cmsType,
  } = ctx.query

  const res = await list({
    interfaceName,
    interfaceType,
    cmsType,
  })

  ctx.body = res
})

router.post('/add', async (ctx) => {
  const {
    interfaceName,
    interfaceUrl,
    interfaceType,
    responseType,
    cmsType,
  } = ctx.request.body

  const res = await add({
    interfaceName,
    interfaceUrl,
    interfaceType,
    responseType,
    cmsType,
  })

  ctx.body = res
})

router.post('/edit', async (ctx) => {
  const {
    id,
    interfaceName,
    interfaceUrl,
    interfaceType,
    responseType,
    cmsType,
  } = ctx.request.body

  const res = await edit({
    id,
    interfaceName,
    interfaceUrl,
    interfaceType,
    responseType,
    cmsType,
  })

  ctx.body = res
})

router.post('/del', async (ctx) => {
  const { id } = ctx.request.body

  const res = await del({ id })

  ctx.body = res
})

export const interfaceRouter = router