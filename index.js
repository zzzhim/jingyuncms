import Koa from "koa"
import path from "path"
// // const jwt = require("koa-jwt")
// import cors from "@koa/cors"
// import logger from "koa-logger"
// import render from "koa-ejs"
// import koaBody from "koa-body"
// import session from "koa-session"
// import koaStatic from 'koa-static'
// import { SECRET_KEY, SESSION_KEY } from "./src/config"
// import { router } from "./src/router"
import fs from "fs"
import { base64_img } from "./src/config"

const app = new Koa()

const list = fs.readdirSync(process.cwd() + '/cache_0/2022/2/9')
console.log(list)
list.filter(item => item.substring(item.length - 3) === '.ts').forEach((item) => {
  const data = fs.readFileSync(process.cwd() + '/cache_0/2022/2/9/' + item, "base64")
  fs.writeFileSync(`${process.cwd() + '/cache_0/2022/2/9/'}${item.substring(0, item.length - 3)}.png`, base64_img + data, "base64")
  fs.rmSync(process.cwd() + '/cache_0/2022/2/9/' + item)
})

// app.keys = [ SECRET_KEY ]

// render(app, {
//   root: path.join(__dirname, 'src/views'),
//   layout: false,
//   viewExt: 'ejs',
//   cache: false,
//   debug: process.env.APP_NODE_ENV === "dev"
// })

// app
//   .use(logger())
//   .use(cors())
//   .use(session({
//     key: SESSION_KEY
//   }, app))
//   .use(koaBody())
//   .use(router.routes(), router.allowedMethods())
//   .use(koaStatic(path.join(__dirname, './src/static')))

app.listen(4000, () => {
  console.log(process.env.APP_NODE_ENV)
  console.log("server start http://localhost:4000")
})