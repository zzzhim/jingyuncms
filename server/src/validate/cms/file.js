import response from "../../utils/response"
import { imgUpload, m3u8Upload } from "../../yup/cms/file"

export async function m3u8FileValidate(ctx, next) {
  try {
    const file = ctx.request.file

    await m3u8Upload.validateSync({ file })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

export async function imgFileValidate(ctx, next) {
  try {
    const file = ctx.request.file

    await imgUpload.validateSync({ file })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}
