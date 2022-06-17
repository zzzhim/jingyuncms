import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup
    .string('账户格式不正确')
    .required('账户不能为空')
    .min(2, '账户长度不能少于2')
    .max(13, '账户长度不能大于13'),
  password: yup
    .string('密码格式不正确')
    .required('密码不正确')
})