import request from '../utils/request'

// export function login(data) {
//     return request({
//         url: '/login',
//         method: 'post',
//         data
//     })
// }

export function getUploadList(params) {
    return request({
        url: '/getUploadList',
        method: 'get',
        params
    })
}