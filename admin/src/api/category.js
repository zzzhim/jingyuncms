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

export function categoryVideoEdit(params) {
  return request({
    url: '/category/video/edit',
    method: 'post',
    data: params
  })
}

export function categoryVideoDel(params) {
  return request({
    url: '/category/video/del',
    method: 'post',
    data: params
  })
}
