import { recommendAddConfigSchema, recommendEditConfigSchema, addBindConfigSchema } from "../yup/recommendConfig"
import { CommonIdSchema } from "../yup/common"
import response from "../utils/response"
import { default as logger } from "../utils/logger"

export async function addConfigValidate(ctx, next) {
  try {
    const {
      // sort,
      // configType,
      // styleType,
      // recommendName,
      sort,
      config_type,
      style_type,
      recommend_name,
    } = ctx.request.body

    const value = await recommendAddConfigSchema.validateSync({ sort, config_type, style_type, recommend_name })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

export async function editConfigValidate(ctx, next) {
  try {
    const {
      id,
      sort,
      config_type,
      style_type,
      recommend_name,
    } = ctx.request.body

    const value = await recommendEditConfigSchema.validateSync({ sort, id, config_type, style_type, recommend_name })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

export async function delConfigValidate(ctx, next) {
  try {
    const { id } = ctx.request.body

    const value = await CommonIdSchema.validateSync({ id })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

export async function addBindValidate(ctx, next) {
  try {
    const {
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
    } = ctx.request.body

    const value = await addBindConfigSchema.validateSync({
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

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}
