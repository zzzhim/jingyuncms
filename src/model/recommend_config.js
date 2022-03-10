const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

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
    'sort': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    },
    'config_type': {
      type: DataTypes.ENUM([ "0", "1", "2" ]),
      allowNull: false,
      defaultValue: "0",
      comment: "0 默认推荐 | 1 PC推荐 | 2 APP推荐",
    },
    'config_name': {
      type: DataTypes.VIRTUAL,
      get() {
        const list = [ '默认推荐', 'PC推荐', 'APP推荐' ]

        return list[this.config_type]
      },
      set(value) {
        throw new Error('不要尝试设置 `config_name` 的值!');
      }
    },
    'style_type': {
      type: DataTypes.ENUM([ "0", "1", "2" ]),
      allowNull: false,
      defaultValue: "0",
      comment: "0 轮播 | 1 正在热播 | 2 推荐",
    },
    'style_name': {
      type: DataTypes.VIRTUAL,
      get() {
        const list = [ '轮播', '正在热播', '推荐' ]

        return list[this.style_type]
      },
      set(value) {
        throw new Error('不要尝试设置 `style_name` 的值!');
      }
    },
    'recommend_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "推荐名称"
    },
    'recommend_icon': {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "推荐icon"
    },
    'create_author_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "创建配置项用户ID"
    },
    'create_author_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建配置项用户名称"
    },
    'update_author_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "更新配置项用户ID"
    },
    'update_author_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新配置项用户名称"
    },
    'create_time': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    'update_time': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    'is_delete': {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    freezeTableName: true,
    indexes: []
  }
)

// MacRecommendConfig.sync({ // 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
//   // force: true, // 将创建表,如果表已经存在,则将其首先删除
//   alter: true, // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
// }).then(res => {
//   console.log(`recommend_config------创建成功`)
// }).catch(err => {
//   console.log(`recommend_config------创建失败`)
//   console.log(err)
// })

module.exports = {
  MacRecommendConfigModel: MacRecommendConfig
}
