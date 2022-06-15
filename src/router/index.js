import Router from "koa-router"
import { cmsRouter } from "./cms/index"
import { webRouter } from "./web"

const router = new Router()

router
  .use(webRouter.routes(), webRouter.allowedMethods())
  .use(cmsRouter.routes(), cmsRouter.allowedMethods())

export { router }