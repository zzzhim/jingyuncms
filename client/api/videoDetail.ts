import { Response, UserInfo } from "../types/common"
import request from "../utils/request"

/**
 * 
 * 登录接口
 */
export const videoDetail = (params: any): Promise<Response<{ userInfo: UserInfo }>> => {
    return request({
        url: "/video/detail",
        method: 'get',
        params,
    }) as any
}


