const { Sequelize } = require('sequelize')

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

    sequelize.sync({
      // force: true, // 将创建表,如果表已经存在,则将其首先删除
      alter: true, // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
    }).then(res => {
      console.log("---------------------------")
      console.log("数据库同步成功")
      console.log("---------------------------")
    }).catch(err => {
      console.log("---------------------------")
      console.log(err)
      console.log("数据库同步失败")
      console.log("---------------------------")
    })
  })()
} catch (error) {
  console.log(error)
}

module.exports = {
  sequelize
}
