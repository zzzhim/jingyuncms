<template>
  <div class="dashboard-container">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        >
      </el-table-column>
      <el-table-column
        prop="imgurl"
        label="视频封面">
      </el-table-column>
      <el-table-column
        prop="videoName"
        label="视频名称"
        >
      </el-table-column>
      <el-table-column
        prop="videoName"
        label="分类"
        >
      </el-table-column>
      <el-table-column
        prop="videoName"
        label="浏览"
        >
      </el-table-column>
      <el-table-column
        prop="videoName"
        label="播放器"
        >
      </el-table-column>
      <el-table-column
        prop="videoName"
        label="更新时间"
        >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getLocalVideoList } from '../../../api/ffmpeg'

export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    getList() {
      this.getLocalVideoList()
    },
    async getLocalVideoList(params = {}) {
      const res = await getLocalVideoList(params)

      console.log(res)
    },
    handleEdit() {

    },
    handleDelete() {

    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
