import Router from "koa-router"
// const { login } = require("../controllers/login")
// const { loginValidate } = require('../validate/login')

const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('home', {
    head: {
      title: '首页',
      keywords: '关键字',
      desc: '简介'
    },
    title: 'title',
    list: [
      {
        title: '1',
        desc: '测试'
      },
      {
        title: '2',
        desc: '测试'
      },
      {
        title: '3',
        desc: '测试'
      },
    ]
  })
})

export const homeRouter = router
