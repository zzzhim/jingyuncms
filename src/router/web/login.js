import Router from "koa-router"
import { login, loginRegister, loginUpdatePassword } from "../../controllers/web/login"
import { webValidateTokenMiddleware } from "../../middleware/webValidateToken"
import { loginValidate } from "../../validate/login"

const router = new Router({
  prefix: '/login'
})

// 登录
router.post('/', loginValidate, async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body

  const data = await login({
    username,
    password,
  })

  ctx.body = data
})

// 注册
router.post('/register', loginValidate, async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body

  const data = await loginRegister({
    username,
    password,
  })

  ctx.body = data
})

// 修改密码
router.post('/updatePassword', webValidateTokenMiddleware, async (ctx, next) => {
  const {
    username,
    oldPassword,
    newPassword,
  } = ctx.request.body

  const { id } = ctx.state.user

  const data = await loginUpdatePassword({
    userId: id,
    username,
    oldPassword,
    newPassword,
  })

  ctx.body = data
})

export const loginRouter = router