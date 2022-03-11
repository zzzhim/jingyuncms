<template>
  <div class="dashboard-container">
    <div>
      <el-tag
        class="tag"
        v-for="item in classList"
        :key="item.type_id"
        type="danger"
      >{{ item.type_name }}(未绑定)</el-tag>
      <!-- <el-tag
        class="tag"
        v-for="item in classList"
        :key="item.type_id"
        type="success"
      >{{ item.type_name }}(未绑定)</el-tag> -->
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading"
    >
      <el-table-column
        type="index"
        label="序号"
        width="150"
        >
      </el-table-column>
      <el-table-column
        prop="vod_name"
        label="视频名称"
        >
      </el-table-column>
      <el-table-column
        prop="vod_en"
        label="拼音"
        >
      </el-table-column>

      <el-table-column
        prop="vod_remarks"
        label="备注"
        >
      </el-table-column>

      <el-table-column
        prop="type_name"
        label="分类"
        >
      </el-table-column>

      <el-table-column
        prop="vod_play_from"
        label="播放器"
        >
      </el-table-column>
      
      <el-table-column
        prop="vod_time"
        label="最近更新时间"
        >
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pg"
      :limit.sync="queryParams.pageSize"
      :pageSizes="pageSizes"
      @pagination="getList"
    />

  </div>
</template>

<script>
import { maccmsProxy } from "@/api/proxy"

export default {
  components: {
  },
  data() {
    return {
      loading: false,
      classList: [],
      total: 0,
      tableData: [],
      pageSizes: [ 20 ],
      queryParams: {
        pg: 1,
        pageSize: 10,
      },
    }
  },
  computed: {},
  methods: {
    async getList() {
      try {
        if(this.loading) {
          return 
        }

        this.loading = true

        const res = await maccmsProxy({ url: this.$route.query.url + `&pg=${this.queryParams.pg}`, method: 'get' })

        if(res.code === 200 && res.data.code === 1) {
          const limit = parseInt(res.data.limit)
          this.tableData = res.data.list
          this.total = res.data.total
          this.pageSizes = [ limit ]
          this.queryParams.pageSize = limit
          this.classList = res.data.class
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
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

    .tag {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
