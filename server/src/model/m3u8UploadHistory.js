
import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

/**
 * 
 * @description m3u8上传历史记录
 */
const M3u8UploadHistory = sequelize.define(
  'm3u8_upload_history',
  {
    m3u8Name: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: 'm3u8_name',
      comment: "文件名称"
    },
    m3u8Url: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: 'm3u8_url',
      comment: "文件地址"
    },
    doubanId: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: true,
      // field: 'douban_id',
      comment: "豆瓣id",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: 'douban_id',
      comment: "上传人",
    },
    isDelete: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: true,
      // field: 'is_delete',
      defaultValue: "0",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
    indexes: []
  }
)

export const M3u8UploadHistoryModel = M3u8UploadHistory
