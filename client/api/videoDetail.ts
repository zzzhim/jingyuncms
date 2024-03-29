import { Response } from "../types/common"
import { VideoDetail } from "../types/video"
import request from "../utils/request"

/**
 * 
 * 视频详情
 */
export const videoDetail = (params: any): Promise<Response<VideoDetail>> => {
  return request({
    url: "/video/detail",
    method: 'get',
    params,
  }) as any
}


