import { ipcMain } from "electron"
import { login } from "../api/login"
import { setToken, setUserInfo } from "../utils/auth"

// 登录
ipcMain.handle("login", async (event, {
  username,
  password,
}) => {
  const result = await login({
    username,
    password,
  })

  if(result.code === 200) {
    setToken(result.data.token)
    setUserInfo(result.data)
  }

  return {
    ...result,
  }
})
