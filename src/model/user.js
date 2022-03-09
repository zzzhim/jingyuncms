const { DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')
const { sequelize } = require('./sequelize')
const { SECRET_KEY } = require('../config')
const md5 = require('md5')

const MacAdminUser = sequelize.define(
  'admin_user',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: { // 虚拟字段
      type: DataTypes.VIRTUAL,
      get() {
        const token = jwt.sign({
          id: this.getDataValue('id'),
          username: this.getDataValue('username'),
          // password: this.getDataValue('password'),
        }, SECRET_KEY, { expiresIn: '6h' })

        return token
      }
    }
  },
  {
    freezeTableName: true,
    hooks: {}
  }
)

MacAdminUser.sync({
  // force: true,
  alter: true,
})

module.exports = {
  MacAdminUserModel: MacAdminUser
}

MacAdminUser.findOrCreate({
  where: {
    username: "admin",
    password: md5("admin123")
  }
})
