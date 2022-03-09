import Router from "koa-router"
import { apiRouter } from "./api/index"
import { loginRouter } from "./views/login"
import { homeRouter } from "./views/home"

const router = new Router()

router
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(homeRouter.routes(), homeRouter.allowedMethods())
  .use(apiRouter.routes(), apiRouter.allowedMethods())

export { router }