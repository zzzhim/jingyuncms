import Koa from "koa"
import path from "path"
// const jwt = require("koa-jwt")
import cors from "@koa/cors"
import logger from "koa-logger"
import render from "koa-ejs"
import koaBody from "koa-body"
import session from "koa-session"
import koaStatic from 'koa-static'
import { SECRET_KEY, SESSION_KEY } from "./src/config"
import { router } from "./src/router"
import axios from "axios"
import fs from "fs"
import request from 'request'
import FormData from 'form-data'

const app = new Koa()

app.keys = [ SECRET_KEY ]

render(app, {
  root: path.join(__dirname, 'src/views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: process.env.APP_NODE_ENV === "dev"
})

;(async () => {
  const img = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY/j///9/AAn7A/0FQ0XKAAAAAElFTkSuQmCCR0AREABC8CUAAcEAAP8B/wAB/IAUSBIBBkZGbXBlZwlTZXJ2aWNlMDF3fEPK//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9HQAAQAACwDQABwQAAAAHwACqxBLL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0dQABAAArAdAAHBAADhAPAAG+EA8AAP4QHwBgoEdW5kAAh96Hf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////R0EAMAdQE'
  const data = fs.readFileSync('./cache_0/2022/2/8/0.ts', "base64")
  console.log((img + data).substring(0, 3000))
  fs.writeFileSync('1.png', Buffer.from(img + data, 'base64'))

  request.post({
    url: "https://img1.jingyunshipin.com/api/upload",
    formData: {
      image: fs.createReadStream(`1.png`)
    },
    headers: {
      token: "4d659ba2034ffe59b518e659e389542f",
    }
  }, function (error, response, body) {
    if (!error) {
        console.log(body,'响应主体')
    } else {
        console.log(error, '上传失败');
    }
  })
})();


app
  .use(logger())
  .use(cors())
  .use(session({
    key: SESSION_KEY
  }, app))
  .use(koaBody())
  .use(router.routes(), router.allowedMethods())
  .use(koaStatic(path.join(__dirname, './src/static')))

app.listen(4000, () => {
  console.log(process.env.APP_NODE_ENV)
  console.log("server start http://localhost:4000")
})