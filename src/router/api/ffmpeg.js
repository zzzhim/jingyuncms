import Router from "koa-router"
import { videoFileList, mp4ToM3U8, downM3u8ToMp4, localVideoMp4List } from "../../controllers/file/video"

const router = new Router({
  prefix: '/ffmpeg'
})

router.get('/file/video', async (ctx, next) => {
  const { videoName = "", pageNo = 1, pageSize = 10 } = ctx.query

  const res = await videoFileList({
    videoName,
    pageNo,
    pageSize,
  })

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

router.get('/file/local/videoMp4List', async (ctx, next) => {
  const res = await localVideoMp4List({})

  ctx.body = res
})

export const ffmpegRouter = router