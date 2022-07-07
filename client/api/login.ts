import { Response, UserInfo } from "../types/common"
import request from "../utils/request"

/**
 * 
 * 登录接口
 */
export const loginPhone = (params: any): Promise<Response<{ userInfo: UserInfo }>> => {
  return request({
      url: "/login/phone",
      method: 'post',
      data: params,
  })as any
}





