import { InterfaceSetupModel } from "../../model/Interface_setup"
import { socketIo } from "../../socket"
import logger from "../../utils/logger"
import response from "../../utils/response"
import { sleep } from "../../utils/sleep"
import { maccmsApiProxy } from "./proxy"
import { videoAdd } from "./video"

/**
 * 
 * @description 采集苹果cms视频
 */
export const maccmsCollection = async ({ id, h = '' }) => {
  try {
    const dataModel = await InterfaceSetupModel.findOne({
      where: {
        id
      }
    })

    const url = dataModel.getDataValue('interfaceUrl')

    maccmsVideo({ id, url, h })

    return response.success(200, {}, '开始采集视频')
  } catch (error) {
    logger.error(error)
    return response.error(500, error, '服务器异常')
  }
}

const maccmsVideo = async ({ id, url, h }) => {
  try {
    const data = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}`, method: 'get' })

    if(data.code === 200 && data.data.code === 1) {
      const {total, pagecount} = data.data

      for (let index = 0; index < pagecount; index++) {
        try {
          // 拿去列表，通过列表拿取id
          const res = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}&pg=${index + 1}`, method: 'get' })

          socketIo.emit('logs', {
            type: 'collection',
            taskType: 'maccms',
            message: '开始采集视频',
            data: {
              log: `开始采集视频 -> 总条数: ${total} 总页数:${pagecount} 当前页:${index + 1}`
            }
          })

          if(res.code === 200 && res.data.code === 1) {
            const list = res.data.list.map(item => item.vod_id)
            // 拿视频详情
            const response = await maccmsApiProxy({ url: `${url}?&ac=detail&ids=${list.join(',')}`, method: 'get' })

            if(response.code === 200 && response.data.code === 1) {
              await videoAdd({ list: response.data.list, interfaceId: id })
            }
          }
        } catch (error) {
          socketIo.emit('logs', {
            type: 'collection',
            taskType: 'maccms',
            message: '采集视频失败',
            data: {
              log: `采集视频失败 -> 未知错误请查看日志`
            }
          })
          logger.error(error)
        } finally {
          await sleep(3000)
        }
      }

      socketIo.emit('logs', {
        type: 'collection',
        taskType: 'maccms',
        message: '开始采集视频',
        data: {
          log: `采集视频完毕 -> 接口id: ${id} 接口地址: ${url}`
        }
      })
    }
  } catch (error) {
    logger.error(error)
  }
}
