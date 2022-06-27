import Router from "koa-router"
import { ipRecordAddMiddleware } from "../../middleware/IpRecord"
import { recommendRouter } from "./recommend"
import { categoryRouter } from "./category"
import { loginRouter } from "./login"
import { videoRouter } from "./video"

const router = new Router({
  prefix: '/web'
})

// api路由
router
  .use(ipRecordAddMiddleware('1'))
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(recommendRouter.routes(), recommendRouter.allowedMethods())
  .use(categoryRouter.routes(), categoryRouter.allowedMethods())
  .use(videoRouter.routes(), videoRouter.allowedMethods())

export const webRouter = router