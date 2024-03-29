import request from '@/utils/request'

export function scheduleList(params) {
  return request({
    url: '/schedule/list',
    method: 'get',
    params
  })
}

export function scheduleAdd(data) {
  return request({
    url: '/schedule/add',
    method: 'post',
    data
  })
}

export function scheduleEdit(data) {
  return request({
    url: '/schedule/edit',
    method: 'post',
    data
  })
}

export function scheduleDel(data) {
  return request({
    url: '/schedule/del',
    method: 'post',
    data
  })
}



export function scheduleStart(data) {
  return request({
    url: '/schedule/start',
    method: 'post',
    data
  })
}

export function scheduleStop(data) {
  return request({
    url: '/schedule/stop',
    method: 'post',
    data
  })
}
