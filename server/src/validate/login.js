import { loginSchema } from "../yup/login"
import response from "../utils/response"

export async function loginValidate(ctx, next) {
  try {
    const { username, password } = ctx.request.body

    const value = await loginSchema.validateSync({ username, password })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error)
  }
}
