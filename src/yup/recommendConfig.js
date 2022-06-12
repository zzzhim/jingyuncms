import * as yup from 'yup'

export const recommendAddConfigSchema = yup.object().shape({
  sort: yup.number(),
  config_type: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  style_type: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  recommend_name: yup
    .string('推荐配置格式不正确')
    .required('推荐配置名称不能为空')
    .min(2, '推荐配置名称长度不能少于2')
    .max(15, '推荐配置名称长度不能大于15')
})

export const recommendEditConfigSchema = yup.object({
  id: yup.mixed().required('id不能为空'),
  sort: yup.number(),
  config_type: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  style_type: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  recommend_name: yup
    .string('推荐配置格式不正确')
    .required('推荐配置名称不能为空')
    .min(2, '推荐配置名称长度不能少于2')
    .max(15, '推荐配置名称长度不能大于15')
})

export const addBindConfigSchema = yup.object({
  sort: yup.number(),
  configId: yup.number().required(),
  configType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  styleType: yup.mixed().oneOf([ '0', '1', '2' ]).required(),
  vodId: yup.number().required(),
  vodName: yup.string().max(30).required(),
  vodImg: yup.string().required(),
  vodIsend: yup.number().required(),
  vodTotal: yup.number(),
  vodSerial: yup.string().max(20),
})
