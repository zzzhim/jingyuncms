import { recommendAddConfigSchema, recommendEditConfigSchema, addBindConfigSchema } from "../yup/recommendConfig"
import { CommonIdSchema } from "../yup/common"
import response from "../utils/response"

export async function addConfigValidate(ctx, next) {
  try {
    const {
      sort,
      configType,
      styleType,
      recommendName,
    } = ctx.request.body

    await recommendAddConfigSchema.validateSync({ sort, configType, styleType, recommendName })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

export async function editConfigValidate(ctx, next) {
  try {
    const {
      id,
      sort,
      configType,
      styleType,
      recommendName,
    } = ctx.request.body

    await recommendEditConfigSchema.validateSync({ sort, id, configType, styleType, recommendName })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

export async function delConfigValidate(ctx, next) {
  try {
    const { id } = ctx.request.body

    await CommonIdSchema.validateSync({ id })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

export async function addBindValidate(ctx, next) {
  try {
    const {
      sort,
      configId,
      categoryId,
      vodId,
      vodName,
      imgUrl,
      vodActor,
      vodArea,
      vodContent,
      vodRemarks,
      vodTotal,
      vodYear,
    }= ctx.request.body

    await addBindConfigSchema.validateSync({
      sort,
      configId,
      categoryId,
      vodId,
      vodName,
      imgUrl,
      vodActor,
      vodArea,
      vodContent,
      vodRemarks,
      vodTotal,
      vodYear,
    })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}
