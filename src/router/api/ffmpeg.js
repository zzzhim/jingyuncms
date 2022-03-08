import Router from "koa-router"
const { videoFileList, mp4ToM3U8, downM3u8ToMp4 } = require("../../controllers/file/video")

const router = new Router({
  prefix: '/ffmpeg'
})

router.get('/file/video', async (ctx, next) => {
  const res = await videoFileList({})

  ctx.body = res
})

router.get('/file/mp4ToM3U8', async (ctx, next) => {
  const res = await mp4ToM3U8({})

  ctx.body = res
})


router.get('/file/downM3u8ToMp4', async (ctx, next) => {
  const res = await downM3u8ToMp4({})

  ctx.body = res
})

export const ffmpegRouter = router