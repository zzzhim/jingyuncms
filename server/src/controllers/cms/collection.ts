import { InterfaceSetupModel } from "../../model/InterfaceSetup"
import logger from "../../utils/logger"
import response from "../../utils/response"
import { sleep } from "../../utils/sleep"
import { underlineToHump } from "../../utils/underlineToHump"
import { bindInterfaceList } from "./category"
import { maccmsApiProxy } from "./proxy"
import { videoAddList } from "./video"

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
    const data = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}`, method: 'get' }) as any

    if(data.code === 200 && data.data.code === 1) {
      const { pagecount } = data.data

      for (let index = 0; index < pagecount; index++) {
        try {
          // 拿去列表，通过列表拿取id
          const res = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}&pg=${index + 1}`, method: 'get' }) as any

          if(res.code === 200 && res.data.code === 1) {
            const list = res.data.list.map(item => item.vod_id)
            // 拿视频详情
            const response = await maccmsApiProxy({ url: `${url}?&ac=detail&ids=${list.join(',')}`, method: 'get' }) as any

            if(response.code === 200 && response.data.code === 1) {
              const data = await bindInterfaceList({ id })
              const categoryVideoList = data.data.list

              let list = response.data.list

              list = list.filter(item => {
                return categoryVideoList.find(ele => ele.id === item.type_id)
              })
      
              list = list.map(item => {
                const obj = {} as any
                for(let key in item) {
                  obj[underlineToHump(key)] = item[key]
                }
      
                const find = categoryVideoList.find(ele => ele.id === item.type_id)
      
                // 分类Id
                obj.categoryId = find.interfaceCategoryId
      
                return obj
              })

              await videoAddList({ list: list })
            }
          }
        } catch (error) {
          logger.error(error)
        } finally {
          await sleep(3000)
        }
      }
    }
  } catch (error) {
    logger.error(error)
  }
}
