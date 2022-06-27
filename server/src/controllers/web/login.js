import { UserModel } from "../../model/user"
import response from "../../utils/response"
import md5 from "md5"

/**
 * 
 * @param {string} username
 * @param {string} password
 * 账户登录
 */
export const login = async ({ username, password }) => {
  const data = await UserModel.findOne({
    // attributes: ['username', 'password', 'id'],
    where: {
      username,
      password: md5(password),
    }
  })

  if (data && data.dataValues) {
    return response.success(
      200,
      data,
    )
  }

  return response.info(500, {}, '账户或密码错误')
}

/**
 * 
 * @param {string} username
 * @param {string} password
 * 账号注册
 */
export const loginRegister = async ({ username, password }) => {
  const data = await UserModel.findOne({
    where: {
      username
    }
  })

  if (data) {
    return response.warning(
      200,
      {},
      '用户已存在'
    )
  }else {
    await UserModel.create({
      username,
      password: md5(password),
      role: '0',
      sex: '0',
    })

    return response.success(
      200,
      {},
      '注册成功'
    )
  }

  return response.info(500, {}, '账户或密码错误')
}

/**
 * 
 * @param {string} userId 用户id
 * @param {string} username 用户账户
 * @param {string} oldPassword 旧密码
 * @param {string} oldPassword 新密码
 * 修改密码
 */
export const loginUpdatePassword = async ({ userId, username, oldPassword, newPassword }) => {
  const data = await UserModel.findOne({
    where: {
      id: userId,
      username,
      password: md5(oldPassword),
    }
  })

  if (data) {
    await UserModel.update({
      password: md5(newPassword),
    }, {
      where: {
        id: userId,
        username,
      }
    })

    return response.success(
      200,
      {},
      '修改密码成功'
    )
  }

  return response.info(500, {}, '账户或密码错误')
}
