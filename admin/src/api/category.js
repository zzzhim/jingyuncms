import request from '@/utils/request'

export function categoryVideoTree(params) {
  return request({
    url: '/category/video/tree',
    method: 'get',
    params
  })
}


export function categoryVideoAdd(params) {
  return request({
    url: '/category/video/add',
    method: 'post',
    data: params
  })
}