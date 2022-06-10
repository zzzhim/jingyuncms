const { CommonIdSchema } = require("../yup/common")
const response = require("../utils/response")

/**
 * 
 * @description 校验Id格式是否正确
 * @method GET | POST
 */
async function commomIdValidate(ctx, next) {
  try {
    const id = ctx.query.id || ctx.request.body.id

    const value = await CommonIdSchema.validateSync({ id })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error)
  }
}

module.exports = {
  commomIdValidate,
}
