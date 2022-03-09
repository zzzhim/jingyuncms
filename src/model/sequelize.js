const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('jingyuncms', 'jingyuncms', '3Z6Ry36dfAwk4TJS', {
  // host: '101.35.189.229',
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
    console.log(111)
  })()
} catch (error) {
  console.log(error)
}

module.exports = {
  sequelize
}
