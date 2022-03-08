import Router from "koa-router"
const { apiRouter } = require('./api/index')
const { loginRouter } = require('./views/login')
const { homeRouter } = require('./views/home')

const router = new Router({
  // prefix: '/api'
})

router
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  .use(homeRouter.routes(), homeRouter.allowedMethods())
  .use(apiRouter.routes(), apiRouter.allowedMethods())


export { router }