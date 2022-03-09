const { recommendAddConfigSchema, recommendEditConfigSchema, addBindConfigSchema } = require("../joi/recommendConfig")
const { CommonIdSchema } = require("../joi/common")
const response = require("../utils/response")

async function addConfigValidate(ctx, next) {
  try {
    const {
      sort,
      configType,
      styleType,
      recommendName,
    } = ctx.request.body

    const value = await recommendAddConfigSchema.validateAsync({ sort, configType, styleType, recommendName })

    return next()
  } catch (error) {
    console.log(error)

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

    const value = await recommendEditConfigSchema.validateAsync({ sort, id, configType, styleType, recommendName })

    return next()
  } catch (error) {
    console.log(error)

    ctx.body = response.warning(500, {}, error)
  }
}

async function delConfigValidate(ctx, next) {
  try {
    const { id } = ctx.request.body

    const value = await CommonIdSchema.validateAsync({ id })

    return next()
  } catch (error) {
    console.log(error)

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

    const value = await addBindConfigSchema.validateAsync({
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
    console.log(error)

    ctx.body = response.warning(500, {}, error)
  }
}

module.exports = {
  addConfigValidate,
  editConfigValidate,
  delConfigValidate,
  addBindValidate,
}
