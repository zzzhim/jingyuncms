import Router from "koa-router"
import { apiRouter } from "./api/index"
import jwt from "koa-jwt"
import { SECRET_KEY } from "../config"

const router = new Router()

router
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