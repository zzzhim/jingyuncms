import { Response } from "../types/common"
import { VideoDetail } from "../types/video"
import request from "../utils/request"

/**
 * 
 * 跟据视频名or视频分类获取视频列表
 */
export const videoList = (params: any): Promise<Response<{ total: number, list: VideoDetail[] }>> => {
  return request({
    url: "/video/list",
    method: 'get',
    params,
  }) as any
}