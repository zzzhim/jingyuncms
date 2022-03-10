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
    }
  },
  {
    freezeTableName: true,
    hooks: {}
  }
)

export const UserModel = User

User.findOrCreate({
  where: {
    username: "admin",
    password: md5("admin123")
  }
})
