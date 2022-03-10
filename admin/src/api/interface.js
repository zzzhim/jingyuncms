import request from '@/utils/request'

export function getInterfaceList(params) {
  return request({
    url: '/interface/list',
    method: 'get',
    params
  })
}

export function interfaceAdd(params) {
  return request({
    url: '/interface/add',
    method: 'post',
    data: params
  })
}

export function interfaceEdit(params) {
  return request({
    url: '/interface/edit',
    method: 'post',
    data: params
  })
}

export function interfaceDel(params) {
  return request({
    url: '/interface/del',
    method: 'post',
    data: params
  })
}
