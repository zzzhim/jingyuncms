const { MacAdminUserModel } = require("../model/user")
const response = require("../utils/response")
const md5 = require('md5')

class Login {
  /**
   * 
   * @param {string} username
   * @param {string} password
   */
  async login({ username, password }) {
    const data = await MacAdminUserModel.findOne({
      attributes: [ 'username', 'password', 'id' ],
      where: {
        username,
        password: md5(password),
      }
    })

    if(data && data.dataValues) {
      return response.success(
        200,
        {
          id: data.dataValues.id,
          username: data.dataValues.username,
          token: data.token,
        }
      )
    }

    return response.info(500, {}, '账户或密码错误')
  }
}

module.exports = new Login()