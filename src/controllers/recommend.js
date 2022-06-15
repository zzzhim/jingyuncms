import sequelize from "sequelize"
import { MacRecommendConfigModel } from "../model/recommend_config"
import { RecommendListModel } from "../model/recommend_list"
import logger from "../utils/logger"
import response from "../utils/response"

/**
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 查询pc推荐列表
 */
export const RecommendList = async () => {
  try {
    const rows = await MacRecommendConfigModel.findAll({
      where: {
        id: 1,
      },
      order: [
        // 升序
        sequelize.fn('max', sequelize.col('sort')),
        // 降序
        // [ sequelize.fn('max', sequelize.col('sort')), 'DESC' ],
      ],
      include: {
        model: RecommendListModel,
        as: 'children',
        order: [
          // 升序
          sequelize.fn('max', sequelize.col('sort')),
        ]
      },
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