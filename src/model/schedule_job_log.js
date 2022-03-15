import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

// 定时任务日志表
const ScheduleJobUser = sequelize.define(
  'schedule_job_log',
  {
    jobId: {
      type: DataTypes.INTEGER({ length: 10 }),
      field: 'job_id'
    },
    cron: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "cron表达式"
    },
    jobName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "任务名称",
      field: 'job_name'
    },
    jobHandler: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "任务处理方法",
      field: 'job_handler'
    },
    jobHandlerTime: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "任务处理时间",
      field: 'job_handler_time'
    },
    jobParams: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "参数",
      field: 'job_params'
    },
    jobLog: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "任务日志",
      field: 'job_log'
    },
    jobErrorLog: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "任务异常日志",
      field: 'job_error_log'
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
      comment: "任务状态 0-停止 1-启动",
      field: 'job_status'
    },
    triggerType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '0',
      comment: "触发类型：0-任务自动触发 1-手动触发",
      field: 'trigger_type'
    },
    executionStatus: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '0',
      comment: "任务执行状态：0-执行中 1-执行完成 2-执行失败",
      field: 'execution_status'
    },
    createBy: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "创建人",
      field: 'create_by'
    },
    updateBy: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "更新人",
      field: 'create_by'
    },
  },
  {
    // freezeTableName: true,
  }
)

ScheduleJobUser.sync({
  alter: true
})

export const ScheduleJobUserModel = ScheduleJobUser
