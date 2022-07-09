import { ipcMain } from "electron"
import { getToken, getUserInfo, removeToken, removeUserInfo } from "../utils/auth"

// 获取token
ipcMain.handle("getToken", async (event) => {
  return getToken() || ''
})

// 获取用户信息
ipcMain.handle("getUserInfo", async (event) => {
  return getUserInfo() || ''
})


// 退出登录
ipcMain.handle("logout", async (event) => {
  removeToken()
  removeUserInfo()

  return {
    code: 200,
    data: {}
  }
})