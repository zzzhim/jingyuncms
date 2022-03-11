import request from '@/utils/request'

export function maccmsProxy(params) {
  return request({
    url: '/proxy/maccms',
    method: 'post',
    data: params
  })
}
