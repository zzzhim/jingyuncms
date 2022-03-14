import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const bindCategory = sequelize.define(
  'bind_category',
  {
    interfaceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "interface_id",
      comment: "接口ID"
    },
    interfaceCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "interface_category_id",
      comment: "接口分类ID"
    },
    interfaceCategoryName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "interface_category_name",
      comment: "接口分类名称"
    },
    bindVideoCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "bind_video_category_id",
      comment: "绑定视频分类ID"
    },
    bindVideoCategoryName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "bind_video_category_name",
      comment: "绑定视频分类名称"
    },
  },
  {

  },
)

export const BindCategoryModel = bindCategory
