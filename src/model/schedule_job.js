import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 定时任务表
const ScheduleJobUser = sequelize.define(
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
      // field: 'job_name'
    },
    jobHandler: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "任务处理方法",
      // field: 'job_handler'
    },
    jobParams: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "参数",
      // field: 'job_params'
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
      // field: 'job_status'
    },
    createBy: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建人",
      // field: 'create_by'
    },
    updateBy: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新人",
      // field: 'create_by'
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
)

export const ScheduleJobUserModel = ScheduleJobUser 
