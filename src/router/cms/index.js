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
import { recommendRouter } from "./recommend"
import jwt from "koa-jwt"
import { SECRET_KEY } from "../../config"

const router = new Router({
  prefix: '/api/cms'
})

// api路由
router
  .use(commonRouter.routes(), commonRouter.allowedMethods())
  .use(recommendRouter.routes(), recommendRouter.allowedMethods())
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(jwt({
    secret: SECRET_KEY,
  }).unless({
    path: [
      /^\/public/,
      /^\/api\/user\/login/,
      /^\/api\/common/,
    ],
  }))
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