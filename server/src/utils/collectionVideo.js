import axios from "axios"
import { bindInterfaceList } from "../controllers/cms/category"
import { videoWarehousing } from "../controllers/cms/video"
import logger from "./logger"
import { sleep } from "./sleep"
import { underlineToHump } from "./underlineToHump"

// 采集视频
export async function collectionVideo({ id, url, h }) {
  try {
    const data = await getMaccmsVideoUpdateList(url, h)

    const { pagecount } = data

    for (let index = 0; index < pagecount; index++) {
      try {
        // 拿去列表详情
        const result = await getMaccmsVideoDetail(url, h, index + 1)

        if(result.code === 1) {
          const data = await bindInterfaceList({ id })
          const categoryVideoList = data.data.list

          let list = result.list

          list = list.filter(item => {
            return categoryVideoList.find(ele => ele.interfaceCategoryId === item.type_id)
          })
  
          list = list.map(item => {
            const obj = {}
            for(let key in item) {
              obj[underlineToHump(key)] = item[key]
            }
  
            const find = categoryVideoList.find(ele => ele.interfaceCategoryId === item.type_id)
  
            // 分类Id
            obj.categoryId = find.bindVideoCategoryId
  
            return obj
          })

          await videoWarehousing({ list: list })
        }
      } catch (error) {
        logger.error(error)
      } finally {
        await sleep(3000)
      }
    }
  } catch (error) {
    logger.error(error)
  }
}

/**
 * 
 * @param {string} url api地址
 * @param {string} h 时间 默认24小时
 * @param {number} pg 页码 默认 1
 * 获取苹果cms最近更新的视频列表
 */
async function getMaccmsVideoUpdateList(url, h = "24", pg = 1) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${url}?&ac=list&h=${h}&pg=${pg}`)
      
      if(data.code === 1) {
        resolve(data)
      }else {
        reject(data)
      }
    } catch (error) {
      logger.error(error)
      reject(error)
    }
  })
}


/**
 * 
 * @param {string} url api地址
 * @param {string} h 时间 默认24小时
 * @param {number} pg 页码 默认 1
 * 获取苹果cms视频列表内容详情
 */
async function getMaccmsVideoDetail(url, h = "24", pg = 1) {
  return new Promise((resolve, reject) => {
    getMaccmsVideoUpdateList(url, h, pg)
      .then(async (data) => {
        const ids = data.list.map(item => item.vod_id).join(",")

        // 等待3秒
        await sleep(3000)

        // 获取详情列表
        axios.get(`${url}?&ac=detail&ids=${ids}`)
          .then(res => {
            const result = res.data

            if(result.code === 1) {
              resolve(result)
            }else {
              reject(result)
            }
          })
      })
      .catch(err => {
        reject(err)
      })
  })
}