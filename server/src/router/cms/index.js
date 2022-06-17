import Router from "koa-router"
import { commonRouter } from "./common"
import { loginRouter } from "./login"
import { videoRouter } from "./video"
import { recommendConfigRouter } from "./recommendConfig"
import { doubanRouter } from "./douban"
import { interfaceRouter } from "./interface"
import { proxyRouter } from "./proxy"
import { categoryRouter } from "./category"
import { scheduleRouter } from "./schedule"
import { collectionRouter } from "./collection"
import { fileRouter } from "./file"
import { cmsValidateTokenMiddleware } from "../../middleware/cmsValidateToken"
import { ipRecordAddMiddleware } from "../../middleware/IpRecord"
import { userRouter } from "./user"

const router = new Router({
  prefix: '/cms'
})

// api路由
router
  // .use(ipRecordAddMiddleware('cms'))
  .use(commonRouter.routes(), commonRouter.allowedMethods())
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(cmsValidateTokenMiddleware)
  .use(userRouter.routes(), userRouter.allowedMethods())
  .use(fileRouter.routes(), fileRouter.allowedMethods())
  .use(videoRouter.routes(), videoRouter.allowedMethods())
  .use(recommendConfigRouter.routes(), recommendConfigRouter.allowedMethods())
  .use(doubanRouter.routes(), doubanRouter.allowedMethods())
  .use(interfaceRouter.routes(), interfaceRouter.allowedMethods())
  .use(proxyRouter.routes(), proxyRouter.allowedMethods())
  .use(categoryRouter.routes(), categoryRouter.allowedMethods())
  .use(scheduleRouter.routes(), scheduleRouter.allowedMethods())
  .use(collectionRouter.routes(), collectionRouter.allowedMethods())

export const cmsRouter = router