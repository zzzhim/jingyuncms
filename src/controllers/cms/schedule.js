import { Op } from "sequelize"
import { ScheduleJobUserModel } from "../../model/scheduleJobLog"
import logger from "../../utils/logger"
import response from "../../utils/response"

/**
 * 
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询接口列表
 */
export const logList = async ({
  keyword = '',
  pageNo = 1,
  pageSize = 10,
}) => {
  try {
    const { count = 0, rows = [] } = await ScheduleJobUserModel.findAndCountAll({
      where: {
        jobName: {
          [ Op.like ]: `%${keyword.trim() || ''}%`
        },
      },
      limit: parseInt(pageSize),
      offset: parseInt(pageSize * (pageNo - 1)),
    })

    return response.success(
      200,
      {
        total: count,
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)

    return response.error(500)
  }
}