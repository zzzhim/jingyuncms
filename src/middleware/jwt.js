import jwt from "jsonwebtoken"

export async function jwtValidate(ctx, next) {
  try {


    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error)
  }
}