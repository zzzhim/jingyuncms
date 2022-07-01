<template>
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
      <el-button round type="primary" class="submit" @click="handleCutting" :disabled="isCuttingStart">开始切片</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { ipcRenderer } from "electron"
import { mapActions, mapMutations, mapState } from "vuex"

export default {
  name: 'HomeViewMain',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState("cuttingStore", [ "cuttingList", "isCuttingStart" ]),
  },
  methods: {
    ...mapMutations("cuttingStore", [ "SET_CUTTING_LIST", "SET_CUTTING_START" ]),
    ...mapActions("cuttingStore", [ "handleCutting" ]),
    cuttingProgress(event, res) {
      const list = this.cuttingList.map(item => {
        if(item.uuid === res.uuid) {
          return {
            ...item,
            progress: res.percent,
            taskType: res.taskType
          }
        }

        return item
      })

      this.SET_CUTTING_LIST(list)
    },
    getCuttingList(event, res) {
      this.SET_CUTTING_LIST(res.cuttingList)
    },
    cuttingStart(event, res) {
      this.SET_CUTTING_START(true)
    },
    cuttingEnd(event, res) {
      this.SET_CUTTING_START(false)
    },
  },
  mounted() {
    ipcRenderer.on("cuttingStart", this.cuttingStart)

    ipcRenderer.on("cuttingEnd", this.cuttingEnd)

    // 接收切片列表
    ipcRenderer.on("cuttingList", this.getCuttingList)

    // 接收切片进度
    ipcRenderer.on("cuttingProgress", this.cuttingProgress)
  },
  destroyed() {
    ipcRenderer.removeListener("cuttingStart", this.cuttingStart)
    ipcRenderer.removeListener("cuttingEnd", this.cuttingEnd)
    ipcRenderer.removeListener("cuttingList", this.getCuttingList)
    ipcRenderer.removeListener("cuttingProgress", this.cuttingProgress)
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
</style>
