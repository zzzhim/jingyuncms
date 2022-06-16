import Router from "koa-router"
import { ipRecordAddMiddleware } from "../../middleware/IpRecord"
import { recommendRouter } from "../web/recommend"
import { categoryRouter } from "./category"
import { loginRouter } from "./login"
import { videoRouter } from "./video"

const router = new Router({
  prefix: '/web'
})

// api路由
router
  // .use(ipRecordAddMiddleware('web'))
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(recommendRouter.routes(), recommendRouter.allowedMethods())
  .use(categoryRouter.routes(), categoryRouter.allowedMethods())
  .use(videoRouter.routes(), videoRouter.allowedMethods())

export const webRouter = router