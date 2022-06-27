import Router from 'koa-router'
import { uploadM3u8, uploadImg } from '../../controllers/cms/file.js/index'
import KoaMulter from "@koa/multer"
import { imgFileValidate, m3u8FileValidate } from '../../validate/cms/file'

const koaMulter = new KoaMulter()

const router = new Router({
  prefix: "/file"
})

/**
 *
 * @description 上传m3u8
 */
router.post('/upload/m3u8', koaMulter.single('file'), m3u8FileValidate, async (ctx, next) => {
  const file = ctx.request['file']
  const { id, username } = ctx.state.user
  const prefixHost = ctx.request.protocol + "://" + ctx.req.headers.host

  const data = await uploadM3u8({ file, username_dir: `${username}_${id}`, prefixHost })

  ctx.body = data
})

/**
 *
 * @param {file} file 文件
 * @description 上传图片
 */
router.post('/upload/img', koaMulter.single('file'), imgFileValidate, async (ctx, next) => {
  const file = ctx.request['file']
  const { id, username } = ctx.state.user
  const prefixHost = ctx.request.protocol + "://" + ctx.req.headers.host

  const data = await uploadImg({ file, username_dir: `${username}_${id}`, prefixHost })

  ctx.body = data
})

export const fileRouter = router
