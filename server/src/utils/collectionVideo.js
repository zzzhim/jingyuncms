import { bindInterfaceList } from "../controllers/cms/category"
import { maccmsApiProxy } from "../controllers/cms/proxy"
import { videoAddList } from "../controllers/cms/video"
import logger from "./logger"
import { sleep } from "./sleep"
import { underlineToHump } from "./underlineToHump"

// 采集视频
export async function collectionVideo({ id, url, h }) {
  try {
    const data = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}`, method: 'get' })

    if(data.code === 200 && data.data.code === 1) {
      const { pagecount } = data.data

      for (let index = 0; index < pagecount; index++) {
        try {
          // 拿去列表，通过列表拿取id
          const res = await maccmsApiProxy({ url: `${url}?&ac=list&h=${h}&pg=${index + 1}`, method: 'get' })

          if(res.code === 200 && res.data.code === 1) {
            const list = res.data.list.map(item => item.vod_id)
            // 拿视频详情
            const response = await maccmsApiProxy({ url: `${url}?&ac=detail&ids=${list.join(',')}`, method: 'get' })

            if(response.code === 200 && response.data.code === 1) {
              const data = await bindInterfaceList({ id })
              const categoryVideoList = data.data.list

              let list = response.data.list

              list = list.filter(item => {
                return categoryVideoList.find(ele => ele.id === item.type_id)
              })
      
              list = list.map(item => {
                const obj = {}
                for(let key in item) {
                  obj[underlineToHump(key)] = item[key]
                }
      
                const find = categoryVideoList.find(ele => ele.id === item.type_id)
      
                // 分类Id
                obj.categoryId = find.interfaceCategoryId
      
                return obj
              })

              console.log("---添加视频定时任务开始---")

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