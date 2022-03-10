import Router from "koa-router"
import { apiRouter } from "./api/index"
import { loginRouter } from "./views/login"
import { homeRouter } from "./views/home"
import jwt from "koa-jwt"
import { SECRET_KEY } from "../config"

const router = new Router()

router
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(homeRouter.routes(), homeRouter.allowedMethods())
  .use(jwt({
    secret: SECRET_KEY,
  }).unless({
    path: [
      /^\/public/,
      /^\/api\/user\/login/,
      /^\/api\/common/,
    ],
  }))
  .use(apiRouter.routes(), apiRouter.allowedMethods())

export { router }