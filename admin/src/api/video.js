import request from '@/utils/request'

export function videoAdd(params) {
  return request({
    url: '/video/add',
    method: 'post',
    data: params
  })
}