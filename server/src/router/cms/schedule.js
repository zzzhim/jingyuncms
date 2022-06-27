import Router from 'koa-router'
import { ScheduleJobList, ScheduleJobAdd, ScheduleJobStart, ScheduleJobStop, ScheduleJobEdit, ScheduleJobDel } from '../../controllers/cms/schedule'

const router = new Router({
  prefix: '/schedule'
})

/**
 * 
 * @description 定时任务列表
 */
router.get('/list', async (ctx) => {
  const data = await ScheduleJobList({})

  ctx.body = data
})

/**
 * 
 * @description 定时任务添加
 */
router.post('/add', async (ctx) => {
  const {
    jobName,
    dayOfWeek,
    hour,
    minute,
    jobType,
    jobParams,
    jobAdditionalParams,
    description,
  } = ctx.request.body

  const {
    id: updateById,
    username: updateByName,
  } = ctx.state.user

  const res = await ScheduleJobAdd({
    jobName,
    dayOfWeek,
    hour,
    minute,
    jobType,
    jobParams,
    jobAdditionalParams,
    description,
    updateById,
    updateByName,
  })

  ctx.body = res
})

/**
 * 
 * @description 定时任务编辑
 */
router.post('/edit', async (ctx) => {
  const {
    id,
    jobName,
    dayOfWeek,
    hour,
    minute,
    jobType,
    jobParams,
    jobAdditionalParams,
    description,
  } = ctx.request.body

  const {
    id: updateById,
    username: updateByName,
  } = ctx.state.user

  const res = await ScheduleJobEdit({
    id,
    jobName,
    dayOfWeek,
    hour,
    minute,
    jobType,
    jobParams,
    jobAdditionalParams,
    description,
    updateById,
    updateByName,
  })

  ctx.body = res
})

/**
 * 
 * @param {number} id
 * @description 删除定时任务
 */
router.post('/del', async (ctx) => {
  const { id } = ctx.request.body

  const res = await ScheduleJobDel({ id })

  ctx.body = res
})

/**
 * 
 * @param {number} id
 * @description 定时任务启动
 */
router.post('/start', async (ctx) => {
  const { id } = ctx.request.body

  const res = await ScheduleJobStart({ id })

  ctx.body = res
})

/**
 * 
 * @param {number} id
 * @description 定时任务启动
 */
router.post('/stop', async (ctx) => {
  const { id } = ctx.request.body

  const res = await ScheduleJobStop({ id })

  ctx.body = res
})

export const scheduleRouter = router