import Router from 'koa-router'
import { uploadM3u8, uploadImg } from '../../controllers/cms/file'
import KoaMulter from "@koa/multer"
import { imgFileValidate, m3u8FileValidate } from '../../validate/cms/file'
import logger from '../../utils/logger'

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

  let hostname = ctx.request.host

  if(hostname.includes(':443') || hostname.includes(':80')) {
    hostname = ctx.request.hostname
  }

  const prefixHost = ctx.request.protocol + "://" + hostname

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

  let hostname = ctx.request.host

  if(hostname.includes(':443') || hostname.includes(':80')) {
    hostname = ctx.request.hostname
  }

  const prefixHost = ctx.request.protocol + "://" + hostname

  const data = await uploadImg({ file, username_dir: `${username}_${id}`, prefixHost })

  ctx.body = data
})

export const fileRouter = router
