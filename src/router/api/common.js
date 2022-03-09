const Router = require('koa-router')
const { captcha } = require("../../controllers/common")

const router = new Router({
  prefix: '/common'
})

/**
 * 
 * @param {string} type 1 登录 2 注册 3 修改密码
 * @description 获取验证码
 */
router.get('/captcha', async (ctx, next) => {
  const { type } = ctx.query

  const data = await captcha(ctx, { type })

  ctx.body = data
})

module.exports = {
  commonRouter: router
}