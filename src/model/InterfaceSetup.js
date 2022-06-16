import { DataTypes } from "sequelize"
import { BindCategoryModel } from "./bindCategory"
import { sequelize } from "./sequelize"

const InterfaceSetup = sequelize.define(
  'interface_setup',
  {
    interfaceName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口名称",
      // field: 'interface_name'
    },
    interfaceUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口地址",
      // field: 'interface_url'
    },
    interfaceType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "接口类型 1 视频 2 文章 3 图片",
      // field: 'interface_type'
    },
    responseType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "返回类型 1 json 2 xml",
      // field: 'response_type'
    },
    cmsType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms",
      // field: 'cms_type'
    },
    // bindType: {
    //   type: DataTypes.JSON,
    //   comment: "接口分类绑定到本地分类",
      // field: 'bind_type'
    // },
    isDelete: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '0',
      // field: 'is_delete'
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
