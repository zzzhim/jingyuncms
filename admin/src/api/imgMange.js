import request from '@/utils/request'

export function configImgList(params) {
    return request({
        url: '/upload/config/img/list',
        method: 'get',
        params
    })
}



export function configImgAdd(data) {
    return request({
        url: '/upload/config/img/add',
        method: 'post',
        data
    })
}


export function configImgDel(data) {
    return request({
        url: '/upload/config/img/del',
        method: 'post',
        data
    })
}

export function configImgEdit(data) {
    return request({
        url: '/upload/config/img/edit',
        method: 'post',
        data
    })
}