import { delStore, getStore, setStore } from "./store"

const TokenKey = 'jingyunshipin_section_token'
const UserKey = 'jingyunshipin_section_user'
const UploadListkey = 'jingyunshipin_section_upload_list'


export function getToken() {
  return getStore(TokenKey)
}

export function setToken(token) {
  return setStore(TokenKey, token)
}

export function removeToken() {
  return delStore(TokenKey)
}

export function getUserInfo() {
  return JSON.parse(getStore(UserKey))
}

export function setUserInfo(userinfo) {
  return setStore(UserKey, JSON.stringify(userinfo))
}

export function removeUserInfo() {
  return delStore(UserKey)
}


export function getUploadList() {
  return JSON.parse(getStore(UploadListkey))
}

export function setUploadList(UploadList) {
  return setStore(UploadListkey, JSON.stringify(UploadList))
}

export function removeUploadList() {
  return delStore(UploadListkey)
}