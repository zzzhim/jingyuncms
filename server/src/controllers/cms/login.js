import { UserModel } from "../../model/user"
import response from "../../utils/response"
import md5 from "md5"

/**
 * 
 * @param {string} username
 * @param {string} password
 */
export const login = async ({ username, password }) => {
  const data = await UserModel.findOne({
    where: {
      username,
      password: md5(password),
    }
  })

  if (data) {
    return response.success(
      200,
      data
    )
  }

  return response.info(500, {}, '账户或密码错误')
}
