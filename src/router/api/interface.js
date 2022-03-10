import Router from "koa-router"
import { add } from "../../controllers/interface"

const router = new Router({
  prefix: '/interface'
})

router.get('/add', async (ctx, next) => {
  const { videoName = "", pageNo = 1, pageSize = 10 } = ctx.query

  const res = await videoFileList({
    videoName,
    pageNo,
    pageSize,
  })

  ctx.body = res
})

router.get('/edit', async (ctx, next) => {

})

router.get('/del', async (ctx, next) => {

})

export const ffmpegRouter = router