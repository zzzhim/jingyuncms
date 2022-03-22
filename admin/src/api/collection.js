import request from '@/utils/request'

export function collectionMaccmsVideo(params) {
  return request({
    url: '/collection/maccms/video',
    method: 'post',
    data: params
  })
}