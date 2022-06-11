import request from '@/utils/request'


export function videoList(params) {
  return request({
    url: '/video/list',
    method: 'get',
    data: params
  })
}

export function videoAdd(params) {
  return request({
    url: '/video/add',
    method: 'post',
    data: params
  })
}