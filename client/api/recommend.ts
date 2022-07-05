import { Response } from "../types/common"
import { RecommendList } from "../types/recommend"
import request from "../utils/request"
import { Daum } from "../types/category";
/**
 * 
 * 首页推荐列表
 */
export const getRecommendList = (params: any): Promise<Response<{ list: RecommendList[] }>> => {
  return request({
    url: "/recommend/list",
    method: 'get',
    params,
  }) as any
}
/**
 * 
 * 分类列表
 */
export const getCategoryList = (): Promise<Response<Daum[]>> => {
  return request({
    url: "/category/video",
    method: 'get'
  }) as any
}