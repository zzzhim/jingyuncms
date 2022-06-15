import { info, success } from "../../utils/response"
import { create } from 'svg-captcha'

/**
 * 
 * @param {string} type 1 登录 2 注册 3 修改密码
 * @description 图形验证码
 */
export async function captcha(ctx, { type }) {
  if(!type) {
    return info(500, {}, '请传入验证码类型')
  }

  const res = create({
    noise: 2,
    background: '#cc9966',
  })

  if(res && res.data && res.text) {
    ctx.session.captchaCode = res.text
    ctx.session.captchaType = type

    return success(
      200,
      {
        svgData: res.data,
      }
    )
  }

  return info(500, {}, '获取验证码失败')
}

