import request from '../utils/request'

export function addM3u8(params) {
  return request({
    url: '/m3u8/add',
    method: 'post',
    data: params,
  })
}
