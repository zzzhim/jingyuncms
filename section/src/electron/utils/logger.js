import log4js from "log4js"
import path from "path"


log4js.configure({
  appenders: {
    log: {
      type: "file",
      filename: path.join(process.cwd(), 'logs') + `/info.log`,
      pattern: "yyyy-MM-dd",
      encoding: 'utf-8',
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: {
      appenders: [ "log" ],
      level: 'error'
    },
  }
})

const logger = log4js.getLogger()

logger.level = "info"

export { logger }

// import dayjs from "dayjs"
// import pino from "pino"

// const logger = (() => {
//   // const params = {
//   //   timestamp: () => `,"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`,
//   //   formatters: {
//   //     log(object) {
//   //       return {
//   //         "log": object
//   //       }
//   //     },
//   //   },
//   //   transport: {
//   //     target: 'pino-tee',
//   //     options: {
//   //       filters: {
//   //         info: `${process.cwd()}/logs/info.log`,
//   //         warn: `${process.cwd()}/logs/warn.log`,
//   //         error: `${process.cwd()}/logs/error.log`,
//   //       },
//   //     },
//   //   }
//   // }

//   const pinoTee = pino.transport({
//     target: 'pino-tee',
//     options: {
//       filters: {
//         info: `${process.cwd()}/logs/info.log`,
//         warn: `${process.cwd()}/logs/warn.log`,
//         error: `${process.cwd()}/logs/error.log`,
//       }
//     }
//   })

//   return pino(pinoTee)

//   // if(NODE_ENV_API === "prod") { // 生产控制台日志
//   //   return pino(params)
//   // }

//   // if(typeof window !== "undefined") { // 开发客户端控制台日志
//   //   return pino(params)
//   // }else { // 开发环境服务器控制台日志
//   //   return {
//   //     info: console.log,
//   //     error: console.log,
//   //   }
//   // }
// })()

// export { logger }