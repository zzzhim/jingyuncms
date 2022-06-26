import request from '@/utils/request'

export function playerAdd(data) {
  return request({
    url: '/player/add',
    method: 'post',
    data
  })
}


export function playerList(data) {
  return request({
    url: '/player/list',
    method: 'get',
    data
  })
}

export function playerEdit(params) {
  return request({
    url: '/player/edit',
    method: 'post',
    data: params
  })
}

export function playerDel(params) {
  return request({
    url: '/player/del',
    method: 'post',
    data: params
  })
}
