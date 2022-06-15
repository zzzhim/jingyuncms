import Router from "koa-router"
import { login } from "../../controllers/login"
import { loginValidate } from "../../validate/login"

const router = new Router({
  prefix: '/login'
})

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

export const loginRouter = router