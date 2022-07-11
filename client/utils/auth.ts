
//关于权限的一些方法
import Cookies from 'js-cookie'

export const TokenKey = 'jingyun-web-Token'
export const UserInfoKey = 'jingyun-web-UserInfo'
export const EnumsKey = 'jingyun-web-Enum'
export const DeviceNoKey = 'jingyun-web-DeviceNo'

export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token: string) {
    return Cookies.set(TokenKey, token, { expires: new Date(new Date().getTime() + 5 * 60 * 60 * 1000) })
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}


export function getUserInfo() {
    const userInfo = decodeURIComponent(Cookies.get(UserInfoKey) ?? '')

    if(userInfo !== null && userInfo) {
        return JSON.parse(userInfo)
    }

    return {}
}

export function setUserInfo(userInfo: any) {
    return Cookies.set(UserInfoKey, encodeURIComponent(JSON.stringify(userInfo)), { expires: new Date(new Date().getTime() + 5 * 60 * 60 * 1000) })
}
export function removeUserInfo() {
    return Cookies.remove(UserInfoKey)
}

export function getEnums() {
    const enums = Cookies.get(EnumsKey)

    if(enums !== null) {
        return JSON.parse(enums ?? '')
    }

    return {}
}

export function setEnums(Enums: any) {
    return Cookies.set(EnumsKey, JSON.stringify(Enums), { expires: new Date(new Date().getTime() + 5 * 60 * 60 * 1000) })
}

export function removeEnums() {
    return Cookies.remove(EnumsKey)
}

/**
 * 
 * 全部删除
 */
export function removeAll() {
    removeToken()
    removeUserInfo()
    removeEnums()
}