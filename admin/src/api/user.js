import request from '@/utils/request'

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function userList(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}

export function userRole(data) {
  return request({
    url: '/user/role/edit',
    method: 'post',
    data
  })
}

export function accountAndPass(data) {
  return request({
    url: '/user/edit/accountAndPass',
    method: 'post',
    data
  })
}
