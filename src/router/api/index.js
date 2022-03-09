import Router from "koa-router"
import { commonRouter } from "./common"
import { loginRouter } from "./login"
import { videoRouter } from "./video"
import { recommendConfigRouter } from "./recommendConfig"
import { ffmpegRouter } from "./ffmpeg"

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

export const apiRouter = router