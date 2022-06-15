export interface Response<T = any> {
  code: string
  msg: string
  timestamp: number
  data?: T
}

export interface UserInfo {
  deviceNo: string
  imgUrl: string
  nickName: string
  sex: string
  token: string
  userId: number
}