import cors from "@koa/cors"
import Koa from "koa"
import koaBody from "koa-body"
import render from "koa-ejs"
import jwt from "koa-jwt"
import logger from "koa-logger"
import session from "koa-session"
import koaStatic from 'koa-static'
import path from "path"
import { SECRET_KEY, SESSION_KEY } from "./src/config"
import { router } from "./src/router"
// import fs from "fs"
// import { base64_img } from "./src/config"

const app = new Koa()

require("./src/model/sequelize")
require("./src/model/vod")
require("./src/model/recommend_config")
require("./src/model/recommend_list")

// const list = fs.readdirSync(process.cwd() + '/cache_0/2022/2/9')
// console.log(list)
// list.filter(item => item.substring(item.length - 3) === '.ts').forEach((item) => {
//   const data = fs.readFileSync(process.cwd() + '/cache_0/2022/2/9/' + item, "base64")
//   fs.writeFileSync(`${process.cwd() + '/cache_0/2022/2/9/'}${item.substring(0, item.length - 3)}.png`, base64_img + data, "base64")
//   fs.rmSync(process.cwd() + '/cache_0/2022/2/9/' + item)
// })

app.keys = [ SECRET_KEY ]

render(app, {
  root: path.join(__dirname, 'src/views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: process.env.APP_NODE_ENV === "dev"
})

app
  .use(logger())
  .use(cors())
  .use(session({
    key: SESSION_KEY
  }, app))
  .use(jwt({
    secret: SECRET_KEY,
  }).unless({
    path: [
      /^\/public/,
      /^\/api\/user\/login/,
      /^\/api\/common/,
      /^\/api\/video\/list/,
      /^\/api\/douban/,
    ],
  }))
  .use(koaBody())
  .use(router.routes(), router.allowedMethods())
  .use(koaStatic(path.join(__dirname, './src/static')))

app.listen(4000, () => {
  console.log(process.env.APP_NODE_ENV)
  console.log("server start http://localhost:4000")
})