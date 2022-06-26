
import response from '../../utils/response'
import { logger } from '../../utils/logger'
import { Op } from 'sequelize'
import { PlayerModel } from '../../model/player'

/**
 *
 * @description 查询播放器列表
 */
export const playerList = async ({}) => {
  try {
    const data = await PlayerModel.findAll({
      order: [
        [ "sort" ]
      ]
    })

    return response.success(
      200,
      data
    )
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}

/**
 * 
 * @param {number} sort 排序
 * @param {string} playerCode 播放器编码
 * @param {string} playerName 播放器名称
 * @param {string} playerUrl 播放器地址
 * @param {string} remarks 备注
 * @description 添加播放器
 */
export const playerAdd = async ({
  sort,
  playerCode,
  playerName,
  playerUrl,
  remarks,
  userId,
  username,
}) => {
  try {
    await PlayerModel.create({
      sort,
      playerCode,
      playerName,
      playerUrl,
      remarks,
      updateById: userId,
      updateByName: username,
    })

    return response.success(200, {})
  } catch (error) {
    logger.error(error)
    return response.error(500, {}, error)
  }
}