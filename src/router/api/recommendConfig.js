import Router from 'koa-router'
import { addConfig, configList, editConfig, delConfig, bindConfiglist, addBindConfig, editBindConfig, delBind } from "../../controllers/recommendConfig"
import { commomIdValidate } from '../../validate/common'
import { addConfigValidate, editConfigValidate, delConfigValidate, addBindValidate } from '../../validate/recommendConfig'

const router = new Router({
  prefix: "/recommend"
})

/**
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 推荐配置列表
 */
router.get('/config/list', async (ctx, next) => {
  const {
    keyword = '',
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await configList({
    keyword,
    pageNo,
    pageSize
  })

  ctx.body = data
})

/**
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} configName 配置名称
 * @param {string} recommendName 推荐名称
 * @param {string} recommendIcon 推荐icon
 * @param {number} updateAuthorId 更新配置项用户ID
 * @param {string} updateAuthorName 更新配置项用户名称
 * @description 推荐配置添加
 */
router.post('/config/add', addConfigValidate, async (ctx, next) => {
  const params = ctx.request.body

  const { id, username } = ctx.state.user

  const data = await addConfig({
    ...params,
    updateAuthorId: id,
    updateAuthorName: username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} id 配置id
 * @param {string} configType "0 默认推荐 | 1 PC推荐 | 2 APP推荐"
 * @param {string} configName 配置名称
 * @param {string} recommendName 推荐名称
 * @param {string} recommendIcon 推荐icon
 * @param {number} updateAuthorId 更新配置项用户ID
 * @param {string} updateAuthorName 更新配置项用户名称
 * @description 编辑推荐配置
 */
router.post('/config/edit', editConfigValidate, async (ctx, next) => {
  const params = ctx.request.body

  const { id, username } = ctx.state.user

  const data = await editConfig({
    ...params,
    updateAuthorId: id,
    updateAuthorName: username,
  })

  ctx.body = data
})

/**
 * 
 * @param {number} id 配置id
 * @description 删除推荐配置
 */
router.post('/config/del', delConfigValidate, async (ctx, next) => {
  const { id } = ctx.request.body

  const data = await delConfig({ id })

  ctx.body = data
})

/**
 * @param {string} keyword 关键字
 * @param {number} pageNo 页码
 * @param {number} pageSize 页数
 * @description 视频关联配置列表
 */
router.get('/config/bind/list', async (ctx, next) => {
  const {
    configId,
    pageNo = 1,
    pageSize = 10,
  } = ctx.query

  const data = await bindConfiglist({
    configId,
    pageNo,
    pageSize,
  })

  ctx.body = data
})

/**
 * @param {number} configId 推荐ID
 * @param {number} sort 排序
 * @param {number} vodId 视频ID
 * @param {string} vodName 视频名称
 * @param {string} vodImg 视频封面
 * @param {number} vodIsend 是否完结
 * @param {number} vodTotal 总集数
 * @param {string} vodSerial 连载数
 * @description 视频关联配置添加
 */
router.post('/recommend/bind/add', addBindValidate, async (ctx, next) => {
  const {
    configId,
    vodId,
    vodName,
    vodCategoryId,
    vodImg,
    vodArea,
    vodYear,
    vodTotal,
    vodContent,
    vodActor,
    updateAuthorId,
    updateAuthorName,
    vodRemarks,
    updateTime,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await addBindConfig({
    configId,
    vodId,
    vodName,
    vodCategoryId,
    vodImg,
    vodArea,
    vodYear,
    vodTotal,
    vodContent,
    vodActor,
    updateAuthorId,
    updateAuthorName,
    vodRemarks,
    updateTime,
  })

  ctx.body = data
})

/**
 * @param {number} id id
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
 * @description 视频关联配置编辑
 */
router.post('/recommend/bind/edit', commomIdValidate, addBindValidate, async (ctx, next) => {
  const {
    id,
    sort = 0,
    configId,
    configType,
    styleType,
    vodId,
    vodName,
    vodImg,
    vodIsend,
    vodTotal,
    vodSerial,
  } = ctx.request.body

  const { id: userId, username } = ctx.state.user

  const data = await editBindConfig({
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
  })

  ctx.body = data
})

/**
 * @param {number} id id
 * @description 删除视频关联配置
 */
router.post('/recommend/bind/del', commomIdValidate, async (ctx, next) => {
  const { id } = ctx.request.body

  const data = await delBind({ id })

  ctx.body = data
})

export const recommendConfigRouter = router