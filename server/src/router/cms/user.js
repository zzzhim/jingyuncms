import Router from 'koa-router'
import { userList }  from '../../controllers/cms/user'

const router = new Router({
  prefix: "/user"
})

/**
 * 
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 用户列表
 */
router.get('/list', async (ctx, next) => {
  const {
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await userList({
    pageNo,
    pageSize
  })

  ctx.body = data
})

export const userRouter = router