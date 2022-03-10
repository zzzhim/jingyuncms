import logger from "../utils/logger"
import response from "../utils/response"

/**
 * 
 * @description 添加自定义接口
 */
export const add = ({ doubanId }) => {
  try {
    
    return response.success(200, data)
  } catch (error) {
    logger.error(error)
    return response.success(500, {}, error)
  }
}
