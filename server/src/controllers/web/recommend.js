import sequelize from "sequelize"
import { RecommendConfigModel } from "../../model/recommendConfig"
import { RecommendListModel } from "../../model/recommendList"
import logger from "../../utils/logger"
import response from "../../utils/response"

/**
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询pc推荐列表
 */
export const recommendList = async () => {
  try {
    const rows = await RecommendConfigModel.findAll({
      where: {
        
      },
      order: [
        [ 'sort' ],
        [ { model: RecommendListModel, as: 'children' }, 'sort' ],
      ],
      // order: [
      //   // 升序
      //   sequelize.fn('max', sequelize.col('sort')),
      //   // 降序
      //   // [ sequelize.fn('max', sequelize.col('sort')), 'DESC' ],
      // ],
      include: {
        model: RecommendListModel,
        as: 'children',
      },
      // raw: true
    })

    return response.success(
      200,
      {
        list: rows,
      }
    )
  } catch (error) {
    logger.error(error)

    return response.error(500, {}, error)
  }
}