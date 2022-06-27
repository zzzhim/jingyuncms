import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"
import md5 from "md5"
import dayjs from "dayjs"
import { createToken } from "../utils/token"

// 用户表
const User = sequelize.define(
  'user',
  {
    oid: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue('id') * 15 + 10000
      },
      comment: "oid"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "设备号"
    },
    token: { // 虚拟字段
      type: DataTypes.VIRTUAL,
      get() {
        this.get
        const token = createToken({
          id: this.getDataValue('id'),
          oid: this.getDataValue('oid'),
          email: this.getDataValue('email'),
          username: this.getDataValue('username'),
          devices: this.getDataValue('devices'),
          sex: this.getDataValue('sex'),
          role: this.getDataValue('role'),
        })

        return token
      }
    },
    role: {
      type: DataTypes.ENUM("0", "1", "2",),
      allowNull: false,
      defaultValue: "1",
      comment: "权限 0 超级管理员 1 普通用户 2 管理员"
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `https://api.multiavatar.com/${dayjs().valueOf()}.png`,
      comment: "头像",
    },
    sex: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "0",
      comment: "0 未知 1 男 2女",
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "积分",
    },
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
    password: md5("admin123"),
  }
})
