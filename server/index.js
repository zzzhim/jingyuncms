import Koa from "koa"
import koaBody from "koa-body"
import loggerRouter from "koa-logger"
import session from "koa-session"
import koaStatic from 'koa-static'
import path from "path"
import cors from "@koa/cors"
import { port, SECRET_KEY,   } from "./src/config/index"
import { router } from "./src/router/index"
import logger from "./src/utils/logger"
import { requestHandler, Sentry, tracingMiddleWare } from "./src/utils/sentry"
import { initRedis } from "./src/utils/redis"
import { initSchedule } from "./src/utils/schedule"
// import './src/socket'

const app = new Koa({
  proxy: true,
  // proxyIpHeader
})

app.keys = [ SECRET_KEY ]

app
  .use(requestHandler)
  .use(tracingMiddleWare)
  .use(loggerRouter())
  .use(cors())
  .use(session({
    key: SESSION_KEY
  }, app))  
  .use(koaBody())
  .use(router.routes())
  .use(koaStatic(path.join(__dirname, './public')))

app.on("error", (err, ctx) => {
  Sentry.withScope(function(scope) {
    scope.addEventProcessor(function(event) {
      return Sentry.Handlers.parseRequest(event, ctx.request)
    })
    Sentry.captureException(err)
  })
})

app.listen(port, () => {
  initRedis() // 初始化redis
  initSchedule() // 初始化定时任务

  logger.info(process.env.APP_NODE_ENV)
  logger.info(`server start http://localhost:${port}`)
})

// // 载入模块
// var Segment = require('segment');
// // 创建实例
// var segment = new Segment();
// // 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
// segment.useDefault();

// var text = '之所以要编写一个纯JS的分词器是因为当时没有一个简单易用的Node.js模块';

// var result = segment.doSegment(text, {
//   convertSynonym: true, // 转换同义词
//   stripStopword: true, // 去除停止符
//   simple: true, // 不返回词性
// });
// console.log(result);

// var nodejieba = require("nodejieba");
// var segment = require("hanzi-tools")

// nodejieba.load({
//   userDict: "./user.uft8"
// });

// const content = "影片为侏罗纪世界系列的完结篇，故事的开篇设定在纳布拉尔岛被摧毁的四年后。如今，恐龙在世界各地与人类共同生活、共同捕猎。这一脆弱的平衡将重塑未来，并最终决定人类能否与史上最可怕生物共享这颗星球，并继续站在食物链的顶端。"

// 提取关键词
// console.log(nodejieba.extract(content, 5))

// // 简体转繁体
// console.log(segment.traditionalize(content))

// // 汉字转拼音
// console.log(segment.pinyinify(content))