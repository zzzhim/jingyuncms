import { DataTypes } from "sequelize"
import { RecommendListModel } from "./recommend_list"
import { sequelize } from "./sequelize"

const MacRecommendConfig = sequelize.define(
  'recommend_config',
  {
    // 'id': {
    //   type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   comment: "配置id"
    // },
    sort: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    },
    configType: {
      type: DataTypes.ENUM([ "0", "1", "2" ]),
      allowNull: false,
      defaultValue: "0",
      comment: "0 默认推荐 | 1 PC推荐 | 2 APP推荐",
    },
    configName: {
      type: DataTypes.VIRTUAL,
      get() {
        const list = [ '默认推荐', 'PC推荐', 'APP推荐' ]

        return list[this.configType]
      },
      set(value) {
        throw new Error('不要尝试设置 `config_name` 的值!');
      }
    },
    styleType: {
      type: DataTypes.ENUM([ "0", "1", "2" ]),
      allowNull: false,
      defaultValue: "0",
      comment: "0 轮播 | 1 正在热播 | 2 推荐",
    },
    styleName: {
      type: DataTypes.VIRTUAL,
      get() {
        const list = [ '轮播', '正在热播', '推荐' ]

        return list[this.styleType]
      },
      set(value) {
        throw new Error('不要尝试设置 `style_name` 的值!');
      }
    },
    recommendName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "推荐名称"
    },
    recommendIcon: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "推荐icon"
    },
    // createAuthorId: {
    //   type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
    //   allowNull: false,
    //   comment: "创建配置项用户ID"
    // },
    // createAuthorName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   comment: "创建配置项用户名称"
    // },
    updateAuthorId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "更新配置项用户ID"
    },
    updateAuthorName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新配置项用户名称"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    isDelete: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
    indexes: []
  }
)

export const MacRecommendConfigModel = MacRecommendConfig

MacRecommendConfigModel.hasMany(RecommendListModel, {
  foreignKey: 'configId',
  as: 'children',
})
