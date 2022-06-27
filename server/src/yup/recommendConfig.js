import * as yup from 'yup'

export const recommendAddConfigSchema = yup.object().shape({
  sort: yup.number(),
  configType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  styleType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  recommendName: yup
    .string()
    .required('推荐配置名称不能为空')
    .min(2, '推荐配置名称长度不能少于2')
    .max(15, '推荐配置名称长度不能大于15')
})

export const recommendEditConfigSchema = yup.object({
  id: yup.mixed().required('id不能为空'),
  sort: yup.number(),
  configType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  styleType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  recommendName: yup
    .string()
    .required('推荐配置名称不能为空')
    .min(2, '推荐配置名称长度不能少于2')
    .max(15, '推荐配置名称长度不能大于15')
})

export const addBindConfigSchema = yup.object({
  sort: yup.number(),
  configId: yup.number().required(),
  categoryId: yup.number().required(),
  vodId: yup.number().required(),
  vodName: yup.string().max(30).required(),
  imgUrl: yup.string().required(),
  vodActor: yup.string(),
  vodArea: yup.string(),
  vodContent: yup.string(),
  vodRemarks: yup.string(),
  vodTotal: yup.number(),
  vodYear: yup.string(),
})
