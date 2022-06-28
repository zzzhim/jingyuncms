import { Response } from "../types/common"
import { RecommendList } from "../types/recommend"
import request from "../utils/request"

/**
 * 
 * 首页推荐列表
 */
export const getRecommendList = (params: any): Promise<Response<{ list: RecommendList[] }>> => {
  return request({
      url: "/recommend/list",
      method: 'get',
      params,
  })as any
}