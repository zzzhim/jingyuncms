import Router from 'koa-router'
import { uploadM3u8, uploadImg } from '../../controllers/cms/file'
import koaBody from "koa-body"
import path from "path"
import KoaMulter from "@koa/multer"

const koaMulter = new KoaMulter()

const router = new Router({
  prefix: "/file"
})

/**
 *
 * @description 上传m3u8
 */
router.post('/upload/m3u8', koaBody({
  multipart: true,
  patchKoa: true,
  formidable: {
    uploadDir: path.join(process.cwd(), "src/static/upload/"), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小限制
  }
}), async (ctx, next) => {
  const file = ctx.request.files.file

  const data = await uploadM3u8({ file })

  ctx.body = data
})

/**
 *
 * @param {file} file 文件
 * @param {string} type 1 本地 2 oss
 * @description 上传图片
 */
router.post('/upload/img', koaMulter.single('file'), async (ctx, next) => { // 单个上传
// router.post('/upload/img', koaMulter.fields([ // 批量上传
//   {
//     name: 'file',
//     maxCount: 1
//   },
// ]), async (ctx, next) => {
  const file = ctx.request.file
  const { type = '1' } = ctx.request.body

  const data = await uploadImg({ type, file })

  ctx.body = data
})

export const fileRouter = router
