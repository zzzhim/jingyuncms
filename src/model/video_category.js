import { DataTypes } from "sequelize"
import { BindCategoryModel } from "./bind_category"
import { sequelize } from "./sequelize"

// 用户表
const videoCategory = sequelize.define(
  'video_category',
  {
    sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "排序",
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: "parent_id",
      comment: "父级分类ID"
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "category_name",
      comment: "分类名称"
    },
    status: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: true,
      defaultValue: "0",
      comment: "是否启用 0-禁止 1-启用"
    }
  },
  {
    freezeTableName: true,
    hooks: {}
  }
)

videoCategory.hasMany(BindCategoryModel, {
  foreignKey: 'videoCategoryId',
  onDelete: "CASCADE",
})

export const VideoCategoryModel = videoCategory

