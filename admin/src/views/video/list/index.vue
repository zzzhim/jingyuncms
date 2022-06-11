<template>
  <div class="dashboard-container">
    <el-table
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        >
      </el-table-column>
      <el-table-column
        prop="vod_pic"
        label="视频封面"
      >
        <template slot-scope="scope">
          <el-image
            :scr="scope.row.vod_pic"
            :preview-src-list="[ scope.row.vod_pic ]"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="vod_name"
        label="视频名称"
        >
      </el-table-column>
      <el-table-column
        prop="vod_class"
        label="分类"
        >
      </el-table-column>
      <el-table-column
        prop="vod_play_from"
        label="播放器"
      >
        <template slot-scope="scope">
          {{ scope.row.vod_play_from.split("$$$").join(',') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="vod_time"
        label="更新时间"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { videoList } from '../../../api/video'

export default {
  data() {
    return {
      list: [],
      total: 0,
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    getList() {
      this.videoList()
    },
    async videoList(params = {}) {
      const res = await videoList(params)

      console.log(res)
      if(res.code === 200) {
        this.list = res.data.list
      }
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
