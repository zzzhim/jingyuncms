import Router from "koa-router"
// const { login } = require("../controllers/login")
// const { loginValidate } = require('../validate/login')

const router = new Router()

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: '登录',
  })
})

export const loginRouter = router
