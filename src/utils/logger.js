import log4js from "log4js"

log4js.level = "all"

log4js.configure({
  appenders: {
    info: {
      type: "file", filename: "./log/info.log",
    },
  },
  categories: {
    default: { appenders: ["info"], level: "all" },
  }
});

export const logger = log4js.getLogger('日志')

export default logger