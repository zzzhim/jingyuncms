import Router from 'koa-router'
import { uploadM3u8 } from '../../controllers/cms/file'
import { fileValidate } from '../../validate/file'
import koaBody from "koa-body"
import path from "path"
import { fileUpload } from '../../yup/file'

const router = new Router({
  prefix: "/file"
})

/**
 *
 * @description 添加视频
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

export const fileRouter = router
