const Koa = require('koa')
const next = require('next')
const Router = require('@koa/router')
const cors = require('@koa/cors')

// const port = parseInt(process.env.PORT, 10) || 3001
const port = 3050

// const dev = process.env.NODE_ENV_API !== 'prod'
const app = next({})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  
  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  // server.use(cors())

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})