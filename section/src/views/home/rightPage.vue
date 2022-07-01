<template>
  <el-aside class="right">
    <div class="table">
      <el-table
        :data="videoForm.videoLocalList"
        :show-header="false"
      >
        <el-table-column
          align="center"
          type="index"
          width="50"
        />

        <el-table-column
          align="center"
          label="文件名"
          how-overflow-tooltip
          prop="fileName"
        />

        <!-- <el-table-column
          label="类型"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            <el-tag size="small">{{ scope.row.type }}</el-tag>
          </template>
        </el-table-column> -->
      </el-table>
    </div>

    <div class="form">
      <el-input
        :disabled="isCuttingStart"
        size="small"
        v-model="videoForm.videoPathInput"
        placeholder="请输入视频路径"
        class="input"
      />

      <el-button
        :disabled="isCuttingStart"
        size="small"
        round
        plain
        type="primary"
        class="path"
        @click="handleGetVideo"
      >获取视频</el-button>
    </div>
  </el-aside>
</template>

<script>
import { ipcRenderer } from "electron"
import { mapActions, mapMutations, mapState } from "vuex"

export default {
  name: 'HomeViewRight',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState("cuttingStore", [ "videoForm", "isCuttingStart" ]),
  },
  methods: {
    ...mapMutations("cuttingStore", [ "SET_VIDEO_FORM" ]),
    ...mapActions("cuttingStore", [ "handleGetVideo" ]),
    updateVideoList(event, res) {
      console.log(this.videoForm)
      if(res.code === 200) {
        this.SET_VIDEO_FORM({
          ...this.videoForm,
          videoLocalList: res.data.list
        })
      }
    }
  },
  mounted() {
    // 更新右侧视频列表
    ipcRenderer.on("updateVideoList", this.updateVideoList)
  },
  destroyed() {
    ipcRenderer.removeListener("updateVideoList", this.updateVideoList)
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
</style>
