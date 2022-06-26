import request from '@/utils/request'

export function videoObjAdd(data) {
  return request({
    url: '/m3u8/add',
    method: 'post',
    data
  })
}

export function videoObjEdit(data) {
  return request({
    url: '/m3u8/edit',
    method: 'post',
    data
  })
}
export function fileUpload(data) {
  return request({
    url: '/file/upload/m3u8',
    method: 'post',
    data
  })
}





