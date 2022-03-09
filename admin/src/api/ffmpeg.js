import request from "../utils/request"

export const getLocalVideoList = (params) => {
  return request({
    method: 'get',
    url: "/ffmpeg/file/video",
    params,
  })
}