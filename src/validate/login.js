const { loginSchema } = require("../yup/login")
const response = require("../utils/response")

export async function loginValidate(ctx, next) {
  try {
    const { username, password } = ctx.request.body

    const value = await loginSchema.validateSync({ username, password })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error)
  }
}
