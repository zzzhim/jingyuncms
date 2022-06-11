import { Sequelize } from 'sequelize'
import { logger } from '../utils/logger'

const sequelize = new Sequelize('jingyuncms', 'jingyuncms', '3Z6Ry36dfAwk4TJS', {
  host: '101.35.189.229',
  dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  define: {
    charset: "utf8",
  },
  dialectOptions: {
    charset: "utf8",
  },
  timezone: '+08:00',
})

try {
  (async () => {
    await sequelize.authenticate()

    // sequelize.sync({
    //   // force: true, // 将创建表,如果表已经存在,则将其首先删除
    //   // alter: true, // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
    // }).then(res => {
    //   logger.info("---------------------------")
    //   logger.info("数据库同步成功")
    //   logger.info("---------------------------")
    // }).catch(err => {
    //   logger.info("---------------------------")
    //   logger.error(err)
    //   logger.error("数据库同步失败")
    //   logger.info("---------------------------")
    // })
  })()
} catch (error) {
  logger.error(error)
}

export { sequelize }
