import logger from "../../utils/logger"
import response from "../../utils/response"
import { ScheduleJobModel } from "../../model/scheduleJob"
import { startSchedule, stopSchedule } from "../../utils/schedule"

/**
 * 
 * @description 查询接口列表
 */
export const ScheduleJobList = async ({ }) => {
  try {
    const data = await ScheduleJobModel.findAll({})

    return response.success(200, data)
  } catch (error) {
    logger.error(error)

    return response.error(500, {})
  }
}

/**
 * 
 * @description 定时任务添加
 */
export const ScheduleJobAdd = async ({
  jobName,
  dayOfWeek = [],
  hour = [],
  minute = 0,
  jobType,
  jobParams,
  jobAdditionalParams,
  description,
  updateById,
  updateByName,
}) => {
  try {
    await ScheduleJobModel.create({
      cron: JSON.stringify({
        dayOfWeek,
        hour,
        minute,
      }),
      jobName,
      jobType,
      jobParams,
      jobAdditionalParams,
      description,
      updateById,
      updateByName,
    })

    return response.success(200, {})
  } catch (error) {
    return response.error(500, {})
  }
}

/**
 * 
 * @description 定时任务启动
 */
export const ScheduleJobStart = async ({ id }) => {
  try {
    const data = await ScheduleJobModel.findOne({
      where: {
        id,
      }
    })

    if (data === null) {
      return response.error(500, {}, "定时任务不存在")
    }

    // 启动定时任务
    await startSchedule(data)

    await data.update({
      jobStatus: "1"
    })

    await data.save()

    return response.success(200, {})
  } catch (error) {
    return response.error(500, {})
  }
}

/**
 * 
 * @description 定时任务停止
 */
export const ScheduleJobStop = async ({ id }) => {
  try {
    const data = await ScheduleJobModel.findOne({
      where: {
        id,
      }
    })

    if (data === null) {
      return response.error(500, {}, "定时任务不存在")
    }

    await stopSchedule(data)

    await data.update({
      jobStatus: "0"
    })

    await data.save()

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {})
  }
}
