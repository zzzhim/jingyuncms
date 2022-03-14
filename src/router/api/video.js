import Router from 'koa-router'
import {
  videoList,
  videoAdd,
} from '../../controllers/video'
import { commomIdValidate } from '../../validate/common'

const router = new Router({
  prefix: "/video"
})

/**
 * @param {number} typeId 分类id
 * @param {number} typeId1 一级分类id
 * @param {string} typeName 分类名
 * @param {string} vodName 视频名
 * @param {string} vodName 视频名
 * @param {number} vodYear 年代
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 视频列表
 */
router.get('/list', async (ctx, next) => {
  const {
    typeId,
    typeId1,
    typeName,
    vodName,
    vodYear,
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await videoList({
    typeId,
    typeId1,
    typeName,
    vodName,
    vodYear,
    pageNo,
    pageSize
  })

  ctx.body = data
})

/**
 *
 * @description 添加视频
 */
router.post('/add', async (ctx, next) => {
  const {
    vod_id,
    type_id,
    vod_name,
    vod_sub,
    vod_en,
    vod_status,
    vod_letter,
    vod_color,
    vod_tag,
    vod_class,
    vod_pic,
    vod_pic_thumb,
    vod_pic_slide,
    vod_actor,
    vod_director,
    vod_writer,
    vod_behind,
    vod_blurb,
    vod_remarks,
    vod_pubdate,
    vod_total,
    vod_serial,
    vod_tv,
    vod_weekday,
    vod_area,
    vod_lang,
    vod_year,
    vod_version,
    vod_state,
    vod_author,
    vod_isend,
    vod_lock,
    vod_level,
    vod_copyright,
    vod_points,
    vod_hits,
    vod_hits_day,
    vod_hits_week,
    vod_hits_month,
    vod_duration,
    vod_up,
    vod_down,
    vod_score,
    vod_score_all,
    vod_score_num,
    vod_time_hits,
    vod_trysee,
    vod_douban_id,
    vod_douban_score,
    vod_reurl,
    vod_rel_vod,
    vod_rel_art,
    vod_content,
    vod_play_from,
    vod_play_note,
    vod_play_url,
    vod_plot,
    vod_plot_name,
    vod_plot_detail,
  } = ctx.query

  const data = await videoAdd({})

  ctx.body = data
})

module.exports = {
  videoRouter: router
}