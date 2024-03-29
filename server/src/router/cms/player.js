import Router from 'koa-router'
import { playerList, playerAdd, playerEdit, playerDel } from '../../controllers/cms/player'

const router = new Router({
  prefix: "/player"
})

/**
 * 
 * @description 播放器列表
 */
router.get('/list', async (ctx, next) => {
  const data = await playerList({})

  ctx.body = data
})

/**
 * 
 * @param {number} sort 排序
 * @param {string} playerCode 播放器编码
 * @param {string} playerName 播放器名称
 * @param {string} playerUrl 播放器地址
 * @param {string} remarks 备注
 * @description 添加播放器
 */
router.post('/add', async (ctx, next) => {
  const {
    sort,
    playerCode,
    playerName,
    playerUrl,
    remarks,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await playerAdd({
    sort,
    playerCode,
    playerName,
    playerUrl,
    remarks,
    userId,
    username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} sort 排序
 * @param {string} playerCode 播放器编码
 * @param {string} playerName 播放器名称
 * @param {string} playerUrl 播放器地址
 * @param {string} remarks 备注
 * @description 编辑播放器
 */
router.post('/edit', async (ctx, next) => {
  const {
    id,
    sort,
    playerCode,
    playerName,
    playerUrl,
    remarks,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await playerEdit({
    id,
    sort,
    playerCode,
    playerName,
    playerUrl,
    remarks,
    userId,
    username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} id id
 * @description 编删除播放器
 */
router.post('/del', async (ctx, next) => {
  const { id } = ctx.request.body

  const data = await playerDel({ id })

  ctx.body = data
})

export const playerRouter = router