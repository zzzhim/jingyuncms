
/**
 * 
 * 
 * ip统计表添加ip
 */
export function ipRecordAddMiddleware(type) {
  return async (ctx, next) => {
    // console.log(ctx.request.ip, ctx.request.ips)
    return next()
  }
}