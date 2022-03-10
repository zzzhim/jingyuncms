const { MacVodModel } = require("../model/vod")
const response = require("../utils/response")
const { LetterNumtoLine } = require("../utils/toLine")
const { Op } = require("sequelize")
const { default: logger } = require("../utils/logger")

class Article {
  /**
   * 
   * @param {number} typeId 分类id
   * @param {number} typeId1 一级分类id
   * @param {string} typeName 分类名
   * @param {string} vodName 视频名
   * @param {string} vodName 视频名
   * @param {number} vodYear 年代
   * @param {number} pageSize 页数
   * @description 查询视频
   */
  async videoList({ pageNo = 1, pageSize = 10, ...obj }) {
    try {
      const params = {}

      for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
          if(typeof obj[key] === "string") {
            params[LetterNumtoLine(key)] = {
              [ Op.like ]: `%${obj[key]}%`
            }
          }else {
            params[LetterNumtoLine(key)] = obj[key]
          }
        }
      }

      const { count = 0, rows = [] } = await MacVodModel.findAndCountAll({
        attributes: [
          'vod_id',
          'vod_name',
          'type_id',
          'vod_sub',
          'vod_tag',
          'vod_class',
          'vod_pic',
          'vod_pic_thumb',
          'vod_pic_slide',
          'vod_pic_screenshot',
          'vod_actor',
          'vod_director',
          'vod_writer',
          'vod_behind',
          'vod_blurb',
          'vod_pubdate',
          'vod_total',
          'vod_serial',
          'vod_lang',
          'vod_year',
          'vod_version',
          'vod_isend',
          'vod_hits',
          'vod_hits_day',
          'vod_hits_week',
          'vod_hits_month',
          'vod_up',
          'vod_down',
          'vod_douban_score',
          'vod_time',
          'vod_content',
          'vod_play_from',
          'vod_play_server',
          'vod_plot',
          'vod_plot_name',
          'vod_plot_detail',
        ],
        where: {
          ...params,
          'is_delete': "0",
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
}

module.exports = new Article()