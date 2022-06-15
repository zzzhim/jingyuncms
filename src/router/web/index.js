import Router from "koa-router"
import { recommendRouter } from "../web/recommend"
import { categoryRouter } from "./category"
import { videoRouter } from "./video"

const router = new Router({
  prefix: '/web'
})

// api路由
router
  .use(recommendRouter.routes(), recommendRouter.allowedMethods())
  .use(categoryRouter.routes(), categoryRouter.allowedMethods())
  .use(videoRouter.routes(), videoRouter.allowedMethods())

export const webRouter = router