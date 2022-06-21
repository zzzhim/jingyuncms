import Router from 'koa-router'
import { logList } from '../../controllers/cms/schedule'

const router = new Router({
  prefix: '/schedule'
})

/**
 * 
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 定时任务日志列表
 */
router.get('/log/list', async (ctx) => {
  const {
    pageNo,
    pageSize,
  } = ctx.query

  const res = await logList({
    pageNo: pageNo as string,
    pageSize: pageSize as string,
  })

  ctx.body = res
})

export const scheduleRouter = router