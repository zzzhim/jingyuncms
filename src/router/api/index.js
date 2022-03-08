import Router from "koa-router"
const { ffmpegRouter } = require('./ffmpeg')

const router = new Router({
  prefix: '/api'
})

// api路由
router
  .use(ffmpegRouter.routes(), ffmpegRouter.allowedMethods())

export const apiRouter = router