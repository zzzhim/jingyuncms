import logger from "../utils/logger"
import { verifyToken } from "../utils/token"

export function cmsValidateTokenMiddleware(ctx, next) {
  const token = ctx.req.headers.token

  try {
    if(typeof token === "string" && token.length) {
      const userInfo = verifyToken(token)

      if(userInfo.role === '2' || userInfo.role === '0' ) {
        // 用户信息传递
        ctx.state.user = userInfo

        return next()
      }
    }
  } catch (error) {
    logger.error(error)
  }

  ctx.status = 401

  ctx.body = '权限不足'
}