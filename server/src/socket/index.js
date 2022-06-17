import Koa from "koa"
import http from "http"
import { Server } from "socket.io"
import logger from "../utils/logger"

const app = new Koa()
const httpServer = http.createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
  serveClient: true,
}).of('/socket')

io.use((socket, next) => {
  next()
})


io.on('connection', (socket) => { // 连接成功
  console.log(`socket connection ${socket.id}`)

  socket.on("disconnect", (reason) => {
    console.log(reason)
  })
})

io.on("connection_error", (err) => { // 当连接异常关闭时发出
  console.log('--------------')
  console.log(err.message);  // the error message, for example "Session ID unknown"
  console.log('--------------')
})

httpServer.listen(4001, () => {
  logger.info(process.env.APP_NODE_ENV)
  logger.info("socket server http://localhost:4001")
})

export const socketIo = io

export default io