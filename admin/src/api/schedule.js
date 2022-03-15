import request from '@/utils/request'

export function getLogList(params) {
  return request({
    url: '/schedule/log/list',
    method: 'get',
    params
  })
}
