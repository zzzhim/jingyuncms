import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 播放器表
const Player = sequelize.define(
  'player',
  {
    sort: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      defaultValue: 0,
      comment: "排序"
    },
    playerCode: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "编码",
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "播放器名称",
    },
    playerStatus: {
      type: DataTypes.ENUM([ "0", "1" ]),
      allowNull: true,
      defaultValue: "0",
      comment: "0 禁用 1启用",
    },
    playerUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "播放器地址",
      validate: {
        isUrl: true,
      }
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "备注",
    },
    updateById: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "用户Id"
    },
    updateByName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建人",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const PlayerModel = Player
