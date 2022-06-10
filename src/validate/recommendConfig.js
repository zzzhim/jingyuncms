const { recommendAddConfigSchema, recommendEditConfigSchema, addBindConfigSchema } = require("../yup/recommendConfig")
const { CommonIdSchema } = require("../yup/common")
const response = require("../utils/response")

async function addConfigValidate(ctx, next) {
  try {
    const {
      sort,
      configType,
      styleType,
      recommendName,
    } = ctx.request.body

    const value = await recommendAddConfigSchema.validateSync({ sort, configType, styleType, recommendName })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

async function editConfigValidate(ctx, next) {
  try {
    const {
      id,
      sort,
      configType,
      styleType,
      recommendName,
    } = ctx.request.body

    const value = await recommendEditConfigSchema.validateSync({ sort, id, configType, styleType, recommendName })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

async function delConfigValidate(ctx, next) {
  try {
    const { id } = ctx.request.body

    const value = await CommonIdSchema.validateSync({ id })

    return next()
  } catch (error) {
    logger.error(error)

    ctx.body = response.warning(500, {}, error)
  }
}

async function addBindValidate(ctx, next) {
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

module.exports = {
  addConfigValidate,
  editConfigValidate,
  delConfigValidate,
  addBindValidate,
}
