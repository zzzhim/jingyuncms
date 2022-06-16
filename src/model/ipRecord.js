
import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

/**
 * 
 * @description ip统计记录表
 */
const IpRecord = sequelize.define(
  'ip_record',
  {
    userId: {
      type: DataTypes.INET,
      allowNull: true,
      comment: "用户Id"
    },
    // oid: {
    //   type: DataTypes.VIRTUAL,
    //   get() {
    //     return this.id * 15 + 10000
    //   },
    //   comment: "oid"
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "用户邮箱"
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "用户昵称"
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "设备号",
    },
    port: {
      type: DataTypes.ENUM("1", "2"),
      allowNull: false,
      defaultValue: "输入端口 1 web 2 app",
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "ip地址"
    },
    total: {
      type: DataTypes.INET,
      allowNull: false,
      defaultValue: 1,
      comment: "请求总次数"
    },
    cretaeTime: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建时间 YYYY-MM-DD"
    },
    updateTime: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新时间 YYYY-MM-DD"
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const IpRecordModel = IpRecord
