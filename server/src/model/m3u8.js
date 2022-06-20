import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 用户表
const M3u8 = sequelize.define(
  'm3u8',
  {
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文件名称",
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文件地址",
      validate: {
        isUrl: true,
      }
    },
    doubanId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true }),
      allowNull: true,
      comment: "豆瓣ID",
    },
    vodName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "视频名称"
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "备注",
    },
    userId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "用户Id"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: 'douban_id',
      comment: "上传人",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const M3u8Model = M3u8
