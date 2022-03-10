import log4js from "log4js"

log4js.configure({
  appenders: { 'out': { type: 'stdout', layout: { type: 'basic' } } },
  categories: { default: { appenders: ['out'], level: 'info' } }
})

export const logger = log4js.getLogger('log')

export default logger