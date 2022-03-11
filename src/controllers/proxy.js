import axios from "axios"
import logger from "../utils/logger"
import response from "../utils/response"
/**
 * 
 * @description 苹果cms接口转发
 */
export const maccmsApiProxy = ({ url, method = 'get', data = {}, params = {}, header }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const config = {
        url: url,
        method: method,
      }

      if(method.toLocaleLowerCase() === 'get') {
        config.params = params
      }else {
        config.data = data
      }

      if(header) {
        config.header = header
      }

      axios
        .request({ ...config })
        .then(res => {
          if(res.data.code === 1) {
            resolve(response.success(200, res.data))
          }else {
            resolve(response.error(500, res.data, res.data.msg))
          }
        })
        .catch(err => {
          logger.error(err)
          reject(response.error(500, err, '获取数据失败'))
        })

    } catch (error) {
      reject(response.error(500, {}, '获取数据失败'))
    }
  })
}
