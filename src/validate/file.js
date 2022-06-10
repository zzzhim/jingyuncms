import { fileUpload } from "../yup/file"
import response from "../utils/response"

export async function fileValidate(ctx, next) {
  try {
    const { file } = ctx.request.files

    const value = await fileUpload.validateSync({ file })

    return next()
  } catch (error) {
    console.log(error)
    ctx.body = response.warning(500, {}, error)
  }
}

