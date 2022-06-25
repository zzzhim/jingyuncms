import request from '@/utils/request'


export function videoList(params) {
  return request({
    url: '/video/list',
    method: 'get',
    params
  })
}

export function videoAdd(params) {
  return request({
    url: '/video/add',
    method: 'post',
    data: params
  })
}


export function videoAddList(params) {
  return request({
    url: '/video/add/list',
    method: 'post',
    data: params
  })
}
