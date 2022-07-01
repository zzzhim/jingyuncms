<template>
  <el-container class="home">
    <el-aside class="left">
      <Left />
    </el-aside>

    <el-container class="center">
      <el-main class="main">
        <div class="table">
          <el-table :data="cuttingList">
            <el-table-column align="center" label="序号" type="index" width="50">
            </el-table-column>

            <el-table-column align="center" label="文件名" show-overflow-tooltip prop="fileName" />

            <el-table-column label="文件类型" width="80" align="center">
              <template slot-scope="scope">
                <el-tag size="small">{{ scope.row.type }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column label="进度" align="center">
              <template slot-scope="scope">
                {{
                scope.row.taskType === '1'
                ?
                `切片进度${Math.floor(scope.row.progress)}%`
                :
                `上传进度${Math.floor(scope.row.progress)}%`
                }}
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="total">
          <div class="block">

          </div>

          <div class="block">

          </div>
        </div>
      </el-main>

      <el-footer class="footer">
        <el-button round type="primary" class="submit" @click="handleCutting" :disabled="isStart">开始切片</el-button>
      </el-footer>
    </el-container>

    <el-aside class="right">
      <div class="table">
        <el-table :data="list" :show-header="false">
          <el-table-column align="center" type="index" width="50">
          </el-table-column>

          <el-table-column align="center" label="文件名" show-overflow-tooltip prop="fileName" />

          <el-table-column label="类型" width="80" align="center">
            <template slot-scope="scope">
              <el-tag size="small">{{ scope.row.type }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="form">
        <el-input :disabled="isStart" size="small" v-model="pathInput" placeholder="请输入视频路径" class="input"></el-input>

        <el-button :disabled="isStart" size="small" round plain type="primary" class="path" @click="handleGetVideo">
          获取视频
        </el-button>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import { ipcRenderer } from "electron"
import Left from "./left.vue"

export default {
  name: 'HomeView',
  components: {
    Left
  },
  data() {
    return {
      cuttingList: [],
      pathInput: '',
      list: [],
      isStart: false,
      getUploadDataList:[],
      form:{
        checkList: [],
        checkList2: [],
        check: 1,
        check: 2,
      },
      xianluList:[
        {name:'线路1'},
        {name:'线路2'},
        {name:'线路3'},
        {name:'线路4' },
      ]
      
    }
  },
  methods: {
    checkChange(){
      if(this.form.check == 2){
        this.form.check2 = 2
      }
    },
    handleGetVideo() {
      ipcRenderer.invoke("getLocalVideoList", {
        path: this.pathInput
      })
      .then(res => {
        if(res.code === 200) {
          this.$message.success(res.message)
        }else {
          this.$message.warning(res.message)
        }
      })
    },
    /**
     * 
     * @description 开始切片
     */
    handleCutting() {
      ipcRenderer.send("cutting", {
        videoPath: this.pathInput,
        videoList: this.list,
        uploadImgList: this.uploadImgList,
      })
    },
  },
  mounted() {
    ipcRenderer.on("cuttingStart", (event, res) => {
      this.isStart = true
    })

    ipcRenderer.on("cuttingEnd", (event, res) => {
      this.isStart = false
    })

    // 更新右侧视频列表
    ipcRenderer.on("updateVideoList", (event, res) => {
      if(res.code === 200) {
        this.list = res.data.list
      }
    })

    // 接收切片列表
    ipcRenderer.on("cuttingList", (event, res) => {
      this.cuttingList = res.cuttingList
    })

    // 接收切片进度
    ipcRenderer.on("cuttingProgress", (event, res) => {
      this.cuttingList = this.cuttingList.map(item => {
        if(item.uuid === res.uuid) {
          return {
            ...item,
            progress: res.percent,
            taskType: res.taskType
          }
        }

        return item
      })
    })
  }
}
</script>

<style lang="scss">
  .el-scrollbar__wrap {
    // width: 100%;
    overflow: auto;
  }
</style>

<style lang="scss" scoped>
  .home {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;

    .left {
      padding:20px 0;
      width: 30% !important;
      height: 100%;
      background-color: #FFFFFF;
    }

    .center {
      box-sizing: border-box;
      width: 40%;
      height: 100%;
      padding: 20px;
      background-color: #F5F5F5;

      .main {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        padding: 0px;

        .table {
          display: flex;
          width: 100%;
          height: calc(100% - 200px - 15px);
          margin-bottom: 15px;
          border-radius: 15px;
          background-color: #FFFFFF;
          overflow: hidden;

          .body {
            width: 100%;
          }
        }

        .total {
          display: flex;
          width: 100%;
          height: 200px;
          // margin: 15px 0px;
          border-radius: 15px;
          background-color: #FFFFFF;

          .block {
            width: 50%;
            height: 100%;
            border-radius: 15px 0px 0px 15px;
            // background-color: #a4caf5;
          }

          .block:last-of-type {
            width: 50%;
            height: 100%;
            border-radius: 0px 15px 15px 0px;
            // background-color: #b9f499;
          }
        }
      }

      .footer {
        padding: 0px;
        padding-top: 15px;

        .submit {
          width: 100%;
          height: 100%;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 30% !important;
      height: 100%;
      padding: 20px;
      border-radius: 15px;

      .table {
        width: 100%;
        height: calc(100% - 115px);
        overflow-y: auto;
        margin-bottom: 15px;
        border-radius: 5px;
        background-color: #FFFFFF;
      }

      .form {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        background-color: #FFFFFF;

        .input {
          border-radius: 15px;
          margin-bottom: 15px;
        }

        .path {
          width: 100%;
          border-radius: 15px;
        }
      }
    }
  }
</style>
