import * as yup from 'yup'

/**
 * 
 * @description 获取文章列表参数规则
 */
export const CommonIdSchema = yup.object().shape({
  id: yup.number().required(),
})
