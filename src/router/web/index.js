import Router from "koa-router"

const router = new Router({
  prefix: '/api/web'
})

// api路由
// router
//   .use(commonRouter.routes(), commonRouter.allowedMethods())
//   .use(loginRouter.routes(), loginRouter.allowedMethods())
//   .use(fileRouter.routes(), fileRouter.allowedMethods())
//   .use(videoRouter.routes(), videoRouter.allowedMethods())
//   .use(recommendConfigRouter.routes(), recommendConfigRouter.allowedMethods())
//   .use(doubanRouter.routes(), doubanRouter.allowedMethods())
//   .use(interfaceRouter.routes(), interfaceRouter.allowedMethods())
//   .use(proxyRouter.routes(), proxyRouter.allowedMethods())
//   .use(categoryRouter.routes(), categoryRouter.allowedMethods())
//   .use(scheduleRouter.routes(), scheduleRouter.allowedMethods())
//   .use(collectionRouter.routes(), collectionRouter.allowedMethods())

export const webRouter = router