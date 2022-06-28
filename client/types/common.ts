export interface Response<T = any> {
  code: number
  message: string
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