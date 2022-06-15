import { DataTypes } from "sequelize"
import jwt from "jsonwebtoken"
import { sequelize } from "./sequelize"
import { SECRET_KEY } from "../config"
import md5 from "md5"

// 用户表
const User = sequelize.define(
  'user',
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
    },
    role: {
      type: DataTypes.ENUM("0", "1", "2",),
      allowNull: false,
      defaultValue: "1",
      comment: "权限 0 超级管理员 1 普通用户 2 管理员"
    }
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const UserModel = User

User.findOrCreate({
  where: {
    username: "admin",
    password: md5("admin123")
  }
})
