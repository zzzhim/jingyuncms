import { ArticleUpdateSchema, ArticleAddSchema, ArticleListSchema } from "../yup/article"
import { warning } from "../utils/response"

/**
 * 
 * @description 校验获取文章列表参数
 * @method GET
 */
export async function articleListValidate(ctx, next) {
  try {
    const { pageSize, pageNo } = ctx.query

    const value = await ArticleListSchema.validateSync({ pageSize, pageNo })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

/**
 * 
 * @description 校验更新文章参数
 * @method POST
 */
export async function articleUpdateValidate(ctx, next) {
  try {
    const { id, title, tags, content } = ctx.request.body

    const value = await ArticleUpdateSchema.validateSync({ id, title, tags, content })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

/**
 * 
 * @description 校验添加文章参数
 * @method POST
 */
export async function articleAddValidate(ctx, next) {
  try {
    const { title, tags, content } = ctx.request.body

    const value = await ArticleAddSchema.validateSync({ title, tags, content })

    return next()
  } catch (error) {
    ctx.body = response.warning(500, {}, error.message || error)
  }
}

