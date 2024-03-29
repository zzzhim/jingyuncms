import request from '@/utils/request'

export function recommendConfigList(params) {
  return request({
    url: '/recommend/config/list',
    method: 'get',
    params,
  })
}

export function recommendConfigAdd(params) {
  return request({
    url: '/recommend/config/add',
    method: 'post',
    data: params,
  })
}

export function recommendConfigEdit(params) {
  return request({
    url: '/recommend/config/edit',
    method: 'post',
    data: params,
  })
}

export function recommendConfigDel(params) {
  return request({
    url: '/recommend/config/del',
    method: 'post',
    data: params,
  })
}

export function recommendConfigBindList(params) {
  return request({
    url: '/recommend/config/bind/list',
    method: 'get',
    params,
  })
}

export function recommendConfigBindAdd(params) {
  return request({
    url: '/recommend/config/bind/add',
    method: 'post',
    data: params,
  })
}

export function recommendConfigBindEdit(params) {
  return request({
    url: '/recommend/config/bind/edit',
    method: 'post',
    data: params,
  })
}


export function recommendConfigBindDel(params) {
  return request({
    url: '/recommend/config/bind/del',
    method: 'post',
    data: params,
  })
}