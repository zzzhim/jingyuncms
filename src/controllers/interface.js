import response from "../utils/response"

/**
 * 
 * @description 添加自定义接口
 */
export const add = ({ doubanId }) => {
  try {
    
    return response.success(200, data)
  } catch (error) {
    console.log(error)
    return response.success(500, {}, error)
  }
}
