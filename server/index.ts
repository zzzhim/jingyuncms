import Koa from "koa"
import koaBody from "koa-body"
import loggerRouter from "koa-logger"
// import session from "koa-session"
import koaStatic from 'koa-static'
import path from "path"
import cors from "@koa/cors"
import { port, SECRET_KEY } from "./src/config"
import { router } from "./src/router"
import logger from "./src/utils/logger"
import { requestHandler, Sentry, tracingMiddleWare } from "./src/utils/sentry"
// import './src/socket'

const app = new Koa({
  proxy: true,
  // proxyIpHeader
})

app.keys = [ SECRET_KEY ]

app
  .use(requestHandler)
  .use(tracingMiddleWare)
  .use(loggerRouter())
  .use(cors())
  // .use(session({
  //   key: SESSION_KEY
  // }, app))
  .use(koaBody())
  .use(router.routes())
  .use(koaStatic(path.join(__dirname, './public')))

app.on("error", (err, ctx) => {
  Sentry.withScope(function(scope: { addEventProcessor: (arg0: (event: any) => any) => void }) {
    scope.addEventProcessor(function(event: any) {
      return Sentry.Handlers.parseRequest(event, ctx.request)
    })
    Sentry.captureException(err)
  })
})

app.listen(port, () => {
  logger.info(process.env.APP_NODE_ENV)
  logger.info(`server start http://localhost:${port}`)
})