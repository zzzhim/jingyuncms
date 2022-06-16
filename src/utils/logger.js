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

import fundebug from "fundebug-nodejs"

fundebug.apikey = "638dfe8c4d295c1134e22a8ca9f8d9d57be85e7cefe3d459afbece7767d1ea1f"

const logger = {
  log: (...params) => {
    console.log(...params)
    fundebug.notify("log", ...params)
  },
  error: (...params) => {
    console.log(...params)
    fundebug.notify("error", ...params)
  },
  warning: (...params) => {
    console.log(...params)
    fundebug.notify("warning", ...params)
  },
  info: (...params) => {
    console.log(...params)
    fundebug.notify("info", ...params)
  },
}

export { logger }

export default logger