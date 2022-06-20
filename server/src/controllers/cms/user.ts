import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { UserModel } from '../../model/user'
import md5 from 'md5'
import { Op } from 'sequelize'

/**
 *
 * @param {string} username
 * @param {string} role
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询用户
 */
export const userList = async ({
  username,
  role,
  pageNo = 1,
  pageSize = 10
}) => {
  try {
    const { count = 0, rows = [] } = await UserModel.findAndCountAll({
      attributes: [
        "id",
        "oid",
        "email",
        "username",
        "devices",
        "role",
        "avatar",
        "sex",
        "createdAt",
        "updatedAt",
      ],
      where: {
        username: {
          [Op.like]: `%${username || ''}%`
        },
        role: {
          [Op.like]: role || '%%',
        },
      },
      limit: pageSize,
      offset: pageSize * (pageNo - 1),
    })

    return response.success(
      200,
      {
        total: count,
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @param {number} userId 用户ID
 * @param {string} username 用户昵称
 * @param {string} oldPassword 旧密码
 * @param {string} newPassword 新密码
 * @description 修改当前用户账户密码
 */
 export const userEditAccountAndPass = async ({ userId, username, oldPassword, newPassword }) => {
  try {
    const result = await UserModel.findOne({
      where: {
        username,
      }
    })

    if(result) {
      return response.warning(500, {}, "当前用户昵称已存在")
    }

    const data = await UserModel.findOne({
      where: {
        id: userId,
        password: md5(oldPassword),
      }
    })

    if(!data) {
      return response.warning(500, {}, "当前用户密码错误")
    }

    await data.update({
      username: username,
      password: md5(newPassword),
    })

    await data.save()

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @param {number} userId 用户ID
 * @param {string} role 权限 0 超级管理员 1 普通用户 2 管理员
 * @description 修改用户权限
 */
 export const userRoleEdit = async ({ userId, role }) => {
  try {
    await UserModel.update(
      {
        role,
      },
      {
        where: {
          id: userId,
        },
      }
    )

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}
