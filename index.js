import cors from "@koa/cors"
import Koa from "koa"
import koaBody from "koa-body"
import loggerRouter from "koa-logger"
// import session from "koa-session"
import koaStatic from 'koa-static'
import path from "path"
import { port, SECRET_KEY, SESSION_KEY } from "./src/config"
import { router } from "./src/router"
import logger from "./src/utils/logger"
import './src/socket'

const app = new Koa({
  proxy: true,
  // proxyIpHeader
})

// require("./src/model/sequelize")

app.keys = [ SECRET_KEY ]

app
  .use(loggerRouter())
  .use(cors())
  // .use(session({
  //   key: SESSION_KEY
  // }, app))
  .use(koaBody())
  .use(router.routes(), router.allowedMethods())
  .use(koaStatic(path.join(__dirname, './src/static')))

app.listen(port, () => {
  logger.info(process.env.APP_NODE_ENV)
  logger.info(`server start http://localhost:${port}`)
})