import Router from "koa-router"
import { commonRouter } from "./common"
import { loginRouter } from "./login"
import { videoRouter } from "./video"
import { recommendConfigRouter } from "./recommendConfig"
import { ffmpegRouter } from "./ffmpeg"
import { doubanRouter } from "./douban"
import { interfaceRouter } from "./interface"
import { proxyRouter } from "./proxy"
import { categoryRouter } from "./category"
import { scheduleRouter } from "./schedule"

const router = new Router({
  prefix: '/api'
})

// api路由
router
  .use(commonRouter.routes(), commonRouter.allowedMethods())
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(videoRouter.routes(), videoRouter.allowedMethods())
  .use(recommendConfigRouter.routes(), recommendConfigRouter.allowedMethods())
  .use(ffmpegRouter.routes(), ffmpegRouter.allowedMethods())
  .use(doubanRouter.routes(), doubanRouter.allowedMethods())
  .use(interfaceRouter.routes(), interfaceRouter.allowedMethods())
  .use(proxyRouter.routes(), proxyRouter.allowedMethods())
  .use(categoryRouter.routes(), categoryRouter.allowedMethods())
  .use(scheduleRouter.routes(), scheduleRouter.allowedMethods())

export const apiRouter = router