import log4js from "log4js"

log4js.level = "all"

log4js.configure({
  appenders: {
    info: {
      type: "file", filename: "./logs/info.log",
    },
  },
  categories: {
    default: { appenders: ["info"], level: "error" },
  }
});

export const logger = log4js.getLogger('日志')

logger.level = "error"

export default logger