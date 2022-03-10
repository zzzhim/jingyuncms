import Router from "koa-router"
import { add, list } from "../../controllers/interface"

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

})

router.post('/del', async (ctx) => {

})

export const interfaceRouter = router