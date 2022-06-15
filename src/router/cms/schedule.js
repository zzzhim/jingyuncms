import Router from 'koa-router'
import { logList } from '../../controllers/schedule'

const router = new Router({
  prefix: '/schedule'
})

/**
 * 
 * @description 定时任务日志列表
 */
router.get('/log/list', async (ctx) => {
  const { id } = ctx.query

  const res = await logList({ id })

  ctx.body = res
})

export const scheduleRouter = router