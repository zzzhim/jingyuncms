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

export function fileImg(params) {
  return request({
    url: '/file/upload/img',
    method: 'post',
    data: params
  })
}

//视频编辑
export function videoEdit(params) {
  return request({
    url: '/video/edit',
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
//上传封面
export function uploadImg(params) {
  return request({
    url: '/file/upload/img',
    method: 'post',
    data: params,
    headers:{
      'Content-type':'multipart/form-data'
    }
  })
}

//删除视频
export function videoDel(params) {
  return request({
    url: '/video/del',
    method: 'post',
    data: params,
   
  })
}

//利用爬虫获取视频数据

export function getDoubanVideoData(params) {
  return request({
    url: '/douban/getDoubanVideoData',
    method: 'get',
    params
  })
}
