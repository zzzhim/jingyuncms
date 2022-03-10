const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

const InterfaceSetup = sequelize.define(
  'interface_setup',
  {
    'interface_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口名称",
    },
    'interface_url': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "接口地址",
    },
    'interface_type': {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "接口类型 1 视频 2 文章 3 图片",
    },
    'response_type': {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "接口类型 1 json 2 xml",
    },
    'cms_type': {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "cms类型 1 鲸云cms 2 苹果cms 3 海洋cms 4 飞飞cms 5 wpcms 6 帝国cms",
    },
    'is_delete': {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0',
    },
  },
)

module.exports = {
  InterfaceSetupModel: InterfaceSetup
}
