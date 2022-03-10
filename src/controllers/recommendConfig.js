const { Op } = require("sequelize")
const { MacRecommendConfigModel } = require("../model/recommend_config")
const { MacRecommendListModel } = require("../model/recommend_list")
const { default: logger } = require("../utils/logger")

const response = require("../utils/response")

class MacRecommendConfig {

  /**
   * @param {string} keyword 关键字
   * @param {number} pageNo 页码
   * @param {number} pageSize 页数
   * @description 查询推荐配置列表
   */
  async configList({
    keyword = '',
    pageNo = 1,
    pageSize = 10,
  }) {
    try {
      const { count = 0, rows = [] } = await MacRecommendConfigModel.findAndCountAll({
        attributes: [
          'id',
          'sort',
          'config_type',
          'config_name',
          'style_type',
          'style_name',
          'recommend_name',
          'recommend_icon',
          'create_time',
          'update_time',
        ],
        where: {
          recommend_name: {
            [ Op.like ]: `%${keyword.trim()}%`
          },
          is_delete: '0',
        },
        limit: parseInt(pageSize),
        offset: parseInt(pageSize * (pageNo - 1)),
      })

      return response.success(
        200,
        {
          count: count,
          list: rows,
        }
      )
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {string} styleType 0 轮播 | 1 正在热播 | 2 推荐
   * @param {string} recommendName 推荐名称
   * @param {string} recommendIcon 推荐icon
   * @param {string} createAuthorId 创建配置项用户ID
   * @param {string} createAuthorName 创建配置项用户名称
   * @description 推荐配置添加
   */
  async addConfig({
    sort,
    configType,
    styleType,
    recommendName,
    recommendIcon,
    createAuthorId,
    createAuthorName,
  }) {
    try {
      const data = await MacRecommendConfigModel.create({
        sort,
        'config_type': configType,
        'style_type': styleType,
        'recommend_name': recommendName,
        'recommend_icon': recommendIcon,
        'create_author_id': createAuthorId,
        'create_author_name': createAuthorName,
        'update_author_id': createAuthorId,
        'update_author_name': createAuthorName,
      })

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {number} id 配置id
   * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {string} styleType 0 轮播 | 1 正在热播 | 2 推荐
   * @param {string} recommendName 推荐名称
   * @param {string} recommendIcon 推荐icon
   * @param {string} updateAuthorId 更新配置项用户ID
   * @param {string} updateAuthorName 更新配置项用户名称
   * @description 编辑推荐配置
   */
  async editConfig({
    id,
    sort,
    configType,
    styleType,
    recommendName,
    recommendIcon,
    updateAuthorId,
    updateAuthorName,
  }) {
    try {
      const data = await MacRecommendConfigModel.update(
        {
          sort,
          'config_type': configType,
          'style_type': styleType,
          'recommend_name': recommendName,
          'recommend_icon': recommendIcon,
          'update_author_id': updateAuthorId,
          'update_author_name': updateAuthorName,
        },
        {
          where: {
            id,
          }
        }
      )

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {number} id id
   * @description 删除推荐配置
   */
  async delConfig({ id }) {
    try {
      const data = await MacRecommendConfigModel.update(
        {
          'is_delete': '1',
        },
        {
          where: {
            id,
            is_delete: '0',
          }
        }
      )

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**

   * @param {string} keyword 关键字
   * @param {number} pageNo 页码
   * @param {number} pageSize 页数
   * @description 视频关联配置列表
   */
  async bindConfiglist({
    keyword = '',
    pageNo = 1,
    pageSize = 10,
  }) {
    try {
      const { count = 0, rows = [] } = await MacRecommendListModel.findAndCountAll({
        attributes: [
          'id',
          'config_type',
          'config_name',
          'style_type',
          'style_name',
          'vod_id',
          'vod_name',
          'vod_img',
          'vod_isend',
          'vod_total',
          'vod_serial',
          'create_time',
          'update_time',
        ],
        where: {
          vod_name: {
            [ Op.like ]: `%${keyword.trim()}%`
          },
          is_delete: '0',
        },
        limit: parseInt(pageSize),
        offset: parseInt(pageSize * (pageNo - 1)),
      })

      return response.success(
        200,
        {
          count: count,
          list: rows,
        }
      )
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {string} userId 更新配置项用户ID
   * @param {string} username 更新配置项用户名称
   * @param {number} configId 推荐ID
   * @param {number} sort 排序
   * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {string} styleType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {number} vodId 视频ID
   * @param {string} vodName 视频名称
   * @param {string} vodImg 视频封面
   * @param {number} vodIsend 是否完结
   * @param {number} vodTotal 总集数
   * @param {string} vodSerial 连载数
   * @description 推荐配置绑定视频
   */
  async addBindConfig({
    userId,
    username,
    sort,
    configId,
    configType,
    styleType,
    vodId,
    vodName,
    vodImg,
    vodIsend,
    vodTotal,
    vodSerial,
  }) {
    try {
      const data = await MacRecommendListModel.create({
        sort,
        'config_id': configId,
        'config_type': configType,
        'style_type': styleType,
        'vod_id': vodId,
        'vod_name': vodName,
        'vod_img': vodImg,
        'vod_isend': vodIsend,
        'vod_total': vodTotal,
        'vod_serial': vodSerial,
        'create_author_id': userId,
        'create_author_name': username,
        'update_author_id': userId,
        'update_author_name': username,
      })

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {number} id id
   * @param {string} userId 更新配置项用户ID
   * @param {string} username 更新配置项用户名称
   * @param {number} configId 推荐ID
   * @param {number} sort 排序
   * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {string} styleType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
   * @param {number} vodId 视频ID
   * @param {string} vodName 视频名称
   * @param {string} vodImg 视频封面
   * @param {number} vodIsend 是否完结
   * @param {number} vodTotal 总集数
   * @param {string} vodSerial 连载数
   * @description 编辑推荐配置绑定视频
   */
  async editBindConfig({
    id,
    userId,
    username,
    sort,
    configId,
    configType,
    styleType,
    vodId,
    vodName,
    vodImg,
    vodIsend,
    vodTotal,
    vodSerial,
  }) {
    try {
      const data = await MacRecommendListModel.update(
        {
          sort,
          'config_id': configId,
          'config_type': configType,
          'style_type': styleType,
          'vod_id': vodId,
          'vod_name': vodName,
          'vod_img': vodImg,
          'vod_isend': vodIsend,
          'vod_total': vodTotal,
          'vod_serial': vodSerial,
          'update_author_id': userId,
          'update_author_name': username,
        },
        {
          where: {
            id,
            is_delete: "0",
          }
        }
      )

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }

  /**
   * @param {number} id id
   * @description 删除推荐配置绑定视频
   */
  async delBind({ id }) {
    try {
      const data = await MacRecommendListModel.update(
        {
          'is_delete': '1',
        },
        {
          where: {
            id,
            is_delete: '0',
          }
        }
      )

      return response.success(200)
    } catch (error) {
      logger.error(error)

      return response.error(500)
    }
  }
}

module.exports = new MacRecommendConfig()