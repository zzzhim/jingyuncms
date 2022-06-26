import request from '@/utils/request'

export function getLogList(params) {
  return request({
    url: '/schedule/list',
    method: 'get',
    params
  })
}
