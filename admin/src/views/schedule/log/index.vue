<template>
  <div class="dashboard-container">
    <AccurateSearch
      :list="list"
      :formData="queryParams"
      @queryTable="getList"
      @handleQuery="handleQuery"
      :isOneRow="true"
    />

    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading"
    >
      <el-table-column
        prop="jobId"
        label="定时任务ID"
        >
      </el-table-column>
      <el-table-column
        prop="jobName"
        label="任务名称"
        >
      </el-table-column>
      <el-table-column
        prop="cron"
        label="cron表达式"
        >
      </el-table-column>

      <el-table-column
        prop="jobParams"
        label="参数"
        >
      </el-table-column>

      <el-table-column
        prop="jobHandler"
        label="任务处理方法"
        >
      </el-table-column>

      <el-table-column
        prop="jobHandlerTime"
        label="任务处理时间"
        >
      </el-table-column>
      <!-- 
      <el-table-column
        prop="jobLog"
        label="任务日志"
        >
      </el-table-column>
      
      <el-table-column
        prop="jobErrorLog"
        label="任务异常日志"
        >
      </el-table-column> -->

      <el-table-column
        prop="description"
        label="详情"
        >
      </el-table-column>

      <el-table-column
        prop="jobStatus"
        label="任务状态"
        >
      </el-table-column>

      <el-table-column
        prop="triggerType"
        label="触发类型"
        >
      </el-table-column>

      <el-table-column
        prop="executionStatus"
        label="任务执行状态"
        >
      </el-table-column>

      <el-table-column
        prop="updatedAt"
        label="更新时间"
        >
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNo"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { getLogList } from "@/api/schedule"

export default {
  components: {
  },
  data() {
    return {
      loading: false,
      total: 0,
      tableData: [],
      queryParams: {
        keyword: '',
        pageNo: 1,
        pageSize: 10,
      },
    }
  },
  computed: {
    list() {
      return [
        {
          span: 24,
          label: "任务名称",
          prop: "keyword",
          placeholder: "请输入任务名称",
          inputType: "input",
          type: "text",
        },
      ]
    },
  },
  methods: {
    async getList() {
      this.getLogList()
    },
    handleQuery() {
      this.queryParams.pageNo = 1
      this.getLogList()
    },
    async getLogList() {
      const res = await getLogList({ ...this.queryParams })

      if(res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.total || 0
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
