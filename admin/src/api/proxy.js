import request from '@/utils/request'

export function maccmsProxy(params) {
  return request({
    url: '/proxy/maccms',
    method: 'post',
    data: params
  })
}

export function maccmsDetailProxy(params) {
  return request({
    url: '/proxy/maccms/detail',
    method: 'post',
    data: params
  })
}


