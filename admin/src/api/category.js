import request from '@/utils/request'

// export function categoryVideoTree(params) {
//   return request({
//     url: '/category/video/tree',
//     method: 'get',
//     params
//   })
// }

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

export function bindInterfaceList(params) {
  return request({
    url: '/category/bind/interface/list',
    method: 'get',
    params
  })
}

export function bindInterfaceAdd(params) {
  return request({
    url: '/category/bind/interface/add',
    method: 'post',
    data: params
  })
}

//视频分类列表
export function categoryList(params) {
  return request({
    url: '/category/list',
    method: 'get',
    data: params
  })
}