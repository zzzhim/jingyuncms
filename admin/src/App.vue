<template>
  <div id="app">
    <router-view />

    <transition name="fade-transform">
      <div class="log" v-show="bool">
        <div class="title">日志</div>
        <div class="scroll">
          <div class="box">
            <template v-for="(item, index) in list">
              <div class="row" :key="index" v-html="item.log"></div>
            </template>
          </div>
        </div>
      </div>
    </transition>

    <div class="btn" @click="bool=!bool">
      <i class="el-icon-reading"></i>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client"

export default {
  name: 'App',
  data() {
    return {
      bool: false,
      list: []
    }
  },
  mounted() {
    const socket = io("localhost:4001/socket")

    socket.emit('login', {})

    socket.on('connect', () => {
      console.log(socket.id)
    })

    socket.on("disconnect", () => {
      console.log(socket.id) // undefined
    })

    socket.on('logs', (data) => {
      if(data.type === "collection" && data.taskType === "maccms") {
        this.list = [
          {
            log: data.data.log,
          },
          ...this.list,
        ]
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .log {
    width: 80vw;
    height: 80vh;
    background-color: rgba($color: #000000, $alpha: .5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100000;

    .title {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      padding: 0px 20px;
      line-height: 50px;
      font-size: 24px;
      color: #333333;
      background-color: #FFFFFF;
    }

    .scroll {
      width: 100%;
      height: calc(100% - 50px);
      overflow-y: auto;
    }

    .box {
      padding: 20px 80px;
    }

    .row {
      font-size: 14px;
      color: #FFFFFF;
      line-height: 2;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #409eff;
    position: absolute;
    right: 40px;
    bottom: 40px;
    cursor: pointer;

    .el-icon-reading {
      color: #FFFFFF;
      font-size: 20px;
    }
  }
</style>
