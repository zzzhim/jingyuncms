
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
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: true,
      comment: "用户Id"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "用户邮箱"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "用户昵称"
    },
    devices: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "设备号",
    },
    port: {
      type: DataTypes.ENUM("1", "2"),
      allowNull: false,
      comment: "输入端口 1 web 2 app"
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "ip地址"
    },
    total: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
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

IpRecordModel.sync({
  force: true,
  alter: true,
}).catch(err => console.log(err))