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
        return this.id * 15 + 10000
      },
      comment: "oid"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    token: { // 虚拟字段
      type: DataTypes.VIRTUAL,
      get() {
        const token = createToken({
          id: this.id,
          oid: this.oid,
          email: this.email,
          username: this.username,
          devices: this.devices,
          sex: this.sex,
          role: this.role,
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
      comment: "头像",
      defaultValue: `https://api.multiavatar.com/${dayjs().valueOf()}.png`
    },
    sex: {
      type: DataTypes.ENUM("0", "1", "2"),
      allowNull: false,
      defaultValue: "0",
      comment: "0 未知 1 男 2女"
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
    email: "123456@gmail.com",
    username: "admin",
    password: md5("admin123"),
    role: '0',
  }
})
