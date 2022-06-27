import Router from "koa-router"
import { cmsRouter } from "./cms/index"
import { webRouter } from "./web/index"

const router = new Router({
  prefix: '/api'
})

router
  .use(webRouter.routes(), webRouter.allowedMethods())
  .use(cmsRouter.routes(), cmsRouter.allowedMethods())

export { router }