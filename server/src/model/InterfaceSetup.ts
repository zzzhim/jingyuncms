import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const InterfaceSetup = sequelize.define(
  'interface_setup',
  {
    interfaceName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口名称",
    },
    interfaceUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口地址",
    },
    interfaceType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "接口类型 1 视频 2 文章 3 图片",
    },
    responseType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "返回类型 1 json 2 xml",
    },
    cmsType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms",
    },
    isDelete: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '0',
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

// InterfaceSetup.hasMany(BindCategoryModel, {
//   foreignKey: "interfaceId",
//   onDelete: "CASCADE",
// })

export const InterfaceSetupModel = InterfaceSetup
