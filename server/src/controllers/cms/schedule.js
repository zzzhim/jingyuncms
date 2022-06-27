import logger from "../../utils/logger"
import response from "../../utils/response"
import schedule from 'node-schedule'
import { ScheduleJobModel } from "../../model/scheduleJob"
import { bindInterfaceList } from "./category"
import { InterfaceSetupModel } from "../../model/InterfaceSetup"
import { collectionVideo } from "../../utils/collectionVideo"

/**
 * 
 * @description 查询接口列表
 */
export const ScheduleJobList = async ({}) => {
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

    if(data === null) {
      return response.error(500, {}, "定时任务不存在")
    }

    // 采集视频
    if(data.jobType === "0") {
      const rule = new schedule.RecurrenceRule();
      const cron = JSON.parse(data.cron)

      rule.dayOfWeek = cron.dayOfWeek // 星期
      rule.hour = cron.hour // 小时
      rule.minute = cron.minute // 分钟
      
      schedule.scheduleJob(rule, async function(){
        const interfaceId = data.jobParams
        const h = data.jobAdditionalParams

        const result = await InterfaceSetupModel.findOne({
          where: {
            id: interfaceId
          }
        })

        if(result) {
          collectionVideo({
            id: interfaceId,
            url: result.interfaceUrl,
            h: h,
          })
        }
      })
    }

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
 * @description 定时任务启动
 */
export const ScheduleCollectionVideoStart = async ({
  dayOfWeek = [],
  hour = [],
  minute = [],
  scheduleType,
  interfaceId,
}) => {
  try {
    if(scheduleType === "0") {
      const rule = new schedule.RecurrenceRule();
      rule.dayOfWeek = [ 0, 1, 2, 3, 4, 5, 6 ] // 星期
      rule.hour = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, ] // 小时
      rule.minute = [ new schedule.Range(0, 59) ] // 分钟

      schedule.scheduleJob(rule, function(){
        console.log('The answer to life, the universe, and everything!');
      })
    }


    return response.success(200, {})
  } catch (error) {
    return response.error(500, {})
  }
}