
import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { UserModel } from '../../model/user'

/**
 *
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询用户
 */
export const userList = async ({ pageNo = 1, pageSize = 10, ...obj }) => {
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
      limit: parseInt(pageSize),
      offset: parseInt(pageSize * (pageNo - 1)),
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