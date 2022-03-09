const Joi = require('joi')

const recommendAddConfigSchema = Joi.object({
  sort: Joi.number(),
  configType: Joi.valid('0', '1', '2').required(),
  styleType: Joi.valid('0', '1', '2').required(),
  recommendName: Joi
    .string()
    .required()
    .min(2)
    .max(15)
    .prefs({
      messages: {
        // 'string.base': '推荐配置名称不是string',
        'string.required': '推荐配置名称不能为空',
        'string.min': '推荐配置名称长度不能少于2',
        'string.max': '推荐配置名称长度不能大于15',
      },
    }),
  // recommendIcon: Joi.string()
})

const recommendEditConfigSchema = Joi.object({
  id: Joi.number().required(),
  sort: Joi.number(),
  configType: Joi.valid('0', '1', '2').required(),
  styleType: Joi.valid('0', '1', '2').required(),
  recommendName: Joi
    .string()
    .required()
    .min(2)
    .max(15)
    .prefs({
      messages: {
        // 'string.base': '推荐配置名称不是string',
        'string.required': '推荐配置名称不能为空',
        'string.min': '推荐配置名称长度不能少于2',
        'string.max': '推荐配置名称长度不能大于15',
      },
    }),
})

const addBindConfigSchema = Joi.object({
  sort: Joi.number(),
  configId: Joi.number().required(),
  configType: Joi.valid('0', '1', '2').required(),
  styleType: Joi.valid('0', '1', '2').required(),
  vodId: Joi.number().required(),
  vodName: Joi.string().max(30).required(),
  vodImg: Joi.string().required(),
  vodIsend: Joi.number().required(),
  vodTotal: Joi.number(),
  vodSerial: Joi.string().max(20),
})

module.exports = {
  recommendAddConfigSchema,
  recommendEditConfigSchema,
  addBindConfigSchema,
}