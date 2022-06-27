import Router from 'koa-router'
import { userList, userRoleEdit, userEditAccountAndPass } from '../../controllers/cms/user'

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
    username,
    role,
    pageNo,
    pageSize,
  } = ctx.query

  const data = await userList({
    username,
    role,
    pageNo: pageNo,
    pageSize: pageSize,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} userId 用户ID
 * @param {string} username 用户昵称
 * @param {string} oldPassword 旧密码
 * @param {string} newPassword 新密码
 * @description 修改当前用户账户密码
 */
router.post('/edit/accountAndPass', async (ctx, next) => {
  const {
    username,
    oldPassword,
    newPassword
  } = ctx.request.body

  const { id: userId } = ctx.state.user

  const data = await userEditAccountAndPass({
    userId,
    username,
    oldPassword,
    newPassword
  })

  ctx.body = data
})

/**
 * @param {number} userId 用户ID
 * @param {string} role 权限 0 超级管理员 1 普通用户 2 管理员
 * @description 修改用户权限
 */
router.post('/role/edit', async (ctx, next) => {
  const {
    userId,
    role = '0',
  } = ctx.request.body

  const data = await userRoleEdit({
    userId,
    role,
  })

  ctx.body = data
})

export const userRouter = router