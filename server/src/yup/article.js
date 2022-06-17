import * as yup from 'yup'

/**
 * 
 * @description 获取文章列表参数规则
 */
export const ArticleListSchema = yup.object().shape({
  pageSize: yup.number(),
  pageNo: yup.number(),
})

/**
 * 
 * @description 添加文章参数规则
 */
export const ArticleAddSchema = yup.object().shape({
  title: yup
    .string()
    .required(),
  tags: yup
    .string()
    .required(),
  content: yup
    .string()
    .required()
})

/**
 * 
 * @description 文章更新参数规则
 */
export const ArticleUpdateSchema = yup.object().shape({
  id: yup
    .number('id格式不正确')
    .required('id不能为空'),
  title: yup
    .string()
    .required(),
  tags: yup
    .string()
    .required(),
  content: yup
    .string()
    .required()
})
