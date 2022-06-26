import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 定时任务表
const ScheduleJob = sequelize.define(
  'schedule_job',
  {
    cron: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "cron表达式"
    },
    jobName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "任务名称",
    },
    jobType: {
      type: DataTypes.ENUM([ "0", "1", "2", "3" ]),
      allowNull: false,
      comment: "任务类型",
    },
    jobParams: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "参数",
    },
    jobAdditionalParams: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "附加参数",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "详情",
    },
    jobStatus: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '0',
      comment: "0停止 1启动",
    },
    updateById: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "用户Id"
    },
    updateByName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新人",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const ScheduleJobModel = ScheduleJob
