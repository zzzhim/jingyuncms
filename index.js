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
import fundebug from "fundebug-nodejs"

fundebug.apikey = "638dfe8c4d295c1134e22a8ca9f8d9d57be85e7cefe3d459afbece7767d1ea1f"

const app = new Koa({
  proxy: true,
  // proxyIpHeader
})

logger.info(111213, 'test')

// require("./src/model/sequelize")
app.on("error", fundebug.KoaErrorHandler)


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