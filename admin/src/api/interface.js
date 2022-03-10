import request from '@/utils/request'

export function getInterfaceList(params) {
  return request({
    url: '/interface/list',
    method: 'get',
    params
  })
}
