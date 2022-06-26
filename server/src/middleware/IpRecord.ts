import { IpRecordModel } from "../model/ipRecord"
import { verifyToken } from "../utils/token"
import dayjs from "dayjs"
import logger from "../utils/logger"

/**
 * 
 * 
 * 添加ip访问统计中间件
 */
export function ipRecordAddMiddleware(type) {
  return async (ctx, next) => {
    if(typeof ctx.ip === "string" && ctx.ip.length > 0) {
      let userInfo = null
      const token = ctx.req.headers.token

      try {
        if(typeof token === "string" && token.length) {
          // 获取用户信息
          userInfo = verifyToken(token)
        }
      } catch (error) {
      }

      let whereParams = {
        port: type,
        ip: ctx.ip,
        cretaeTime: dayjs().format('YYYY-MM-DD'),
      } as any

      if(userInfo) {
        whereParams.userId = userInfo.id
      }

      IpRecordModel.findOne({
        where: {
          ...whereParams
        }
      }).then(async data => {
        if(data) { // 此ip今日已添加
          
          data.update({
            total: data.total + 1,
            updateTime: dayjs().format('YYYY-MM-DD'),
          })
          await data.save()
        }else {
          const params = {
            port: type,
            ip: ctx.ip,
            total: 1,
            cretaeTime: dayjs().format('YYYY-MM-DD'),
            updateTime: dayjs().format('YYYY-MM-DD'),
          } as any

          if(userInfo) {
            params.userId = userInfo.id
            params.email = userInfo.email || ''
            params.username = userInfo.username
            params.devices = userInfo.devices || ''
          }

          IpRecordModel.create({ ...params }).catch(err => logger.error(err))
        }
      }).catch((err) => {
        logger.error(err)
      })
    }


    return next()
  }
}