import Router from "koa-router"
import { apiRouter } from "./api/index"

const router = new Router()

router.use(apiRouter.routes(), apiRouter.allowedMethods())

export { router }