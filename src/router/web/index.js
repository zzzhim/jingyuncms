import Router from "koa-router"
import { recommendRouter } from "../web/recommend"

const router = new Router({
  prefix: '/api/web'
})

// api路由
router
  .use(recommendRouter.routes(), recommendRouter.allowedMethods())

export const webRouter = router