import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const RecommendList = sequelize.define(
  "recommend_list",
  {
    sort: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      defaultValue: 0,
      // field: "sort",
      comment: "排序"
    },
    configId: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      // field: "configId",
      comment: "绑定的推荐id",
    },
    vodId: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      // field: "vodId",
      comment: "视频id"
    },
    vodCategoryId: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      // field: "vodCategoryId",
      comment: "视频分类id"
    },
    vodName: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: "vodName",
      comment: "视频名称"
    },
    vodImg: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: "vodImg",
      comment: "视频封面 | 幻灯片封面"
    },
    vodArea: {
      type: DataTypes.STRING(20),
      allowNull: true,
      // field: "vodArea",
      comment: "地区",
    },
    vodYear: {
      type: DataTypes.STRING(10),
      allowNull: true,
      // field: "vodYear",
      comment: "年份",
    },
    vodRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
      // field: "vodRemarks",
      comment: "备注",
    },
    vodTotal: {
      type: DataTypes.MEDIUMINT({ length: 6 }),
      allowNull: false,
      // field: "vodTotal",
      comment: "总集数",
    },
    vodContent: {
      type: DataTypes.TEXT,
      allowNull: true,
      // field: "vodContent",
      comment: "详细介绍",
    },
    vodActor: {
      type: DataTypes.STRING,
      allowNull: true,
      // field: "vodActor",
      comment: "主演",
    },
    updateAuthorId: {
      type: DataTypes.INTEGER({ length: 10, }),
      allowNull: false,
      // field: "updateAuthorId",
      comment: "更新视频用户ID"
    },
    updateAuthorName: {
      type: DataTypes.STRING,
      allowNull: false,
      // field: "updateAuthorName",
      comment: "更新视频用户名称"
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      // field: "createTime",
      defaultValue: DataTypes.NOW,
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      // field: "updateTime",
      defaultValue: DataTypes.NOW,
    },
  },
  {
    underscored: true,
    freezeTableName: true,
    indexes: []
  }
)

export const RecommendListModel = RecommendList
