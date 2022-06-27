import schedule from "node-schedule"
import { InterfaceSetupModel } from "../model/InterfaceSetup"
import { ScheduleJobModel } from "../model/scheduleJob"
import { collectionVideo } from "./collectionVideo"
import logger from "./logger"

export async function initSchedule() {
  try {
      const list = await ScheduleJobModel.findAll({
        where: {
          jobStatus: "1",
        }
      })

      if(Array.isArray(list) && list.length > 0) {
        list.forEach(item => startSchedule(item))
      }
  } catch (error) {
    logger.error(error)
  }
}

// 启动定时任务
export async function startSchedule(data) {
  const scheduledJobs = schedule.scheduledJobs

  if(scheduledJobs[data.jobUuid]) {
    logger.warn(data.jobUuid + "-定时任务已存在")
    return 
  }

  // 采集视频
  if (data.jobType === "0") {
    const rule = new schedule.RecurrenceRule();
    const cron = JSON.parse(data.cron)

    rule.dayOfWeek = cron.dayOfWeek // 星期
    rule.hour = cron.hour // 小时
    rule.minute = cron.minute // 分钟

    schedule.scheduleJob(data.jobUuid, rule, async function () {
      const interfaceId = data.jobParams
      const h = data.jobAdditionalParams

      const result = await InterfaceSetupModel.findOne({
        where: {
          id: interfaceId
        }
      })

      if (result) {
        collectionVideo({
          id: interfaceId,
          url: result.interfaceUrl,
          h: h,
        })
      }
    })
  }
}

// 停止定时任务
export async function stopSchedule(data) {
  const scheduledJobs = schedule.scheduledJobs

  if(!scheduledJobs[data.jobUuid]) {
    logger.warn(data.jobUuid + "-定时任务不存在，无法取消定时任务")
    return 
  }

  await schedule.cancelJob(data.jobUuid)
}