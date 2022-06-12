// import log4js from "log4js"

// log4js.configure({
//   appenders: {
//     info: {
//       type: "file", filename: "./logs/info.log",
//     },
//   },
//   categories: {
//     default: { appenders: ["info"], level: "error" },
//   }
// });

// const logger = log4js.getLogger('日志')

// logger.level = "all"

const logger = {
  log: console.log,
  error: console.log,
  warning: console.log,
  info: console.log,
}

export { logger }

export default logger