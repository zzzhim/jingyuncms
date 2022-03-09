const response = require("../utils/response")
const svgCaptcha = require('svg-captcha')

class Common {
  /**
   * 
   * @param {string} type 1 登录 2 注册 3 修改密码
   * @description 图形验证码
   */
  async captcha(ctx, { type }) {
    if(!type) {
      return response.info(500, {}, '请传入验证码类型')
    }

    const res = svgCaptcha.create({
      noise: 2,
      background: '#cc9966',
    })

    if(res && res.data && res.text) {
      ctx.session.captchaCode = res.text
      ctx.session.captchaType = type

      return response.success(
        200,
        {
          svgData: res.data,
        }
      )
    }

    return response.info(500, {}, '获取验证码失败')
  }
}

module.exports = new Common()