import { CommonIdSchema } from "../yup/common"
import response from "../utils/response"

/**
 * 
 * @description 校验Id格式是否正确
 * @method GET | POST
 */
export async function commomIdValidate(ctx, next) {
  try {
    let id = ctx.query.id

    if(!id) {
      id = ctx.request.body.id
    }

    await CommonIdSchema.validateSync({ id })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}
