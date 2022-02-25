import Router from "koa-router"
// const { commonRouter } = require('./common')
const { loginRouter } = require('./login')
// const { videoRouter } = require('./video')
// const { recommendConfigRouter } = require('./recommendConfig')
// const { articleRouter } = require('./article')

const router = new Router({
  // prefix: '/api'
})

router
  // .use(commonRouter.routes(), commonRouter.allowedMethods())
  .use(loginRouter.routes(), loginRouter.allowedMethods())
  // .use(videoRouter.routes(), videoRouter.allowedMethods())
  // .use(recommendConfigRouter.routes(), recommendConfigRouter.allowedMethods())

// module.exports = {
//   router
// }

export { router }