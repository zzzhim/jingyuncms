const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

const MacRecommendList = sequelize.define(
  'recommend_list',
  {
    'sort': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    },
    'config_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "绑定的推荐id",
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
    'vod_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "视频id"
    },
    'vod_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "视频名称"
    },
    'vod_img': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "视频封面 | 幻灯片封面"
    },
    'vod_isend': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      comment: "是否完结",
    },
    'vod_total': {
      type: DataTypes.MEDIUMINT({ length: 6 }),
      allowNull: false,
      comment: "总集数",
    },
    'vod_serial': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "连载数"
    },
    'create_author_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "创建视频用户ID"
    },
    'create_author_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建视频用户名称"
    },
    'update_author_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "更新视频用户ID"
    },
    'update_author_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新视频用户名称"
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

module.exports = {
  MacRecommendListModel: MacRecommendList
}
