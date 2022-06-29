<template>
  <div class="dashboard-container">
    <!-- <AccurateSearch :list="list" :formData="queryParams" @queryTable="getList" @handleQuery="handleQuery"
      :isOneRow="true">
    </AccurateSearch> -->
    <!-- {{tableData}} -->
    <el-table :data="tableData" style="width: 100%" height="calc(100vh - 200px)">
      <el-table-column prop="id" label="接口ID" width="150">
      </el-table-column>
      <el-table-column prop="jobName" label="接口名称">
      </el-table-column>
      <el-table-column prop="jobParams" label="接口id" width="100">
      </el-table-column>
      <el-table-column prop="jobAdditionalParams" label="时间" width="100">
      </el-table-column>
      <el-table-column prop="description" label="任务详情" width="100">
      </el-table-column>
      <el-table-column prop="description" label="周几">
        <template scope="scope">
          <el-tag effect="dark" v-for="item,index in JSON.parse(scope.row.cron).dayOfWeek" :key="index"
            style="margin-right:10px;margin-bottom:10px">
            <span v-if="item == 0">周日</span>
            <span v-if="item == 1">周一</span>
            <span v-if="item == 2">周二</span>
            <span v-if="item == 3">周三</span>
            <span v-if="item == 4">周四</span>
            <span v-if="item == 5">周五</span>
            <span v-if="item == 6">周六</span>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="小时">
        <template scope="scope">
          <el-tag effect="dark" v-for="item,index in JSON.parse(scope.row.cron).hour"
            style="margin-right:10px;margin-bottom:10px" :key="index">
            <span>{{item}}</span>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="分钟" width="100">
        <template scope="scope">
          {{JSON.parse(scope.row.cron).minute}}
        </template>
      </el-table-column>

      <el-table-column prop="jobType" label="采集类型" width="100">
        <template scope="scope">
          <el-tag v-if="scope.row.jobType == '0'" effect="dark">
            视频
          </el-tag>
          <el-tag v-else-if="scope.row.jobType === '2'" effect="dark">
            文章
          </el-tag>
          <el-tag v-else-if="scope.row.jobType === '3'" effect="dark">
            图片
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="jobStatus" label="状态" width="100">
        <template scope="scope">
          <el-tag v-if="scope.row.jobStatus == '1'" effect="dark">
            运行中
          </el-tag>
          <el-tag v-else-if="scope.row.jobStatus == '0'">
            已停止
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="updatedAt" label="更新时间">
      </el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot="header" slot-scope="scope">
          <el-button size="mini" @click="add(scope.row, 24)">新增</el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" v-if="scope.row.jobStatus == 1" @click="scheduleStop(scope.row, 24)">暂停</el-button>
          <el-button size="mini" v-if="scope.row.jobStatus == 0" @click="scheduleStart(scope.row, 24)">开启</el-button>

          <el-button size="mini" @click="scheduleDel(scope.row, 24)">删除</el-button>
          <el-button size="mini" @click="edit(scope.row, 24)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNo" :limit.sync="queryParams.pageSize"
      @pagination="getList" /> -->
    <scheduleForm ref="scheduleForm" @shuaxin="getList"></scheduleForm>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { scheduleList, scheduleDel, scheduleStop, scheduleStart } from "@/api/schedule";

import scheduleForm from "./add";
export default {
  components: {
    scheduleForm
  },
  data() {
    return {
      cmsTypeList: [
        {
          id: 1,
          name: "鲸云cms",
        },
        {
          id: 2,
          name: "苹果cms",
        },
        {
          id: 3,
          name: "海洋cms",
        },
        {
          id: 4,
          name: "飞飞cms",
        },
        {
          id: 5,
          name: "wpcms",
        },
        {
          id: 6,
          name: "帝国cms",
        },
      ],
      total: 0,
      tableData: [],
      queryParams: {
        pageNo: 1,
        pageSize: 10,
        keyword: '',
        // interfaceType: '',
        // cmsType: '',
      },
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    list() {
      return [
        {
          span: 24,
          label: "接口名称",
          prop: "keyword",
          placeholder: "请输入接口名称",
          inputType: "input",
          type: "text",
        },
      ];
    }
  },
  methods: {
    async scheduleStart(e){
      let res = await scheduleStart({id:e.id})
      if (res.code === 200) {
        this.$message.success(res.message)
        this.getList()
      }else{
        this.$message.warning(res.message)

      }
    },
    async scheduleStop(e) {
      let res = await scheduleStop({ id: e.id })
      if (res.code === 200) {
        this.$message.success(res.message)
        this.getList()
      } else {
        this.$message.warning(res.message)

      }
    },
    
    add(){
      this.$refs.scheduleForm.add()
    },
    edit(e){
      this.$refs.scheduleForm.edit(e)

    },
    async getList() {
      let res = await scheduleList()
      this.tableData = res.data

    },
    async scheduleDel(row){
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await scheduleDel({ id: row.id })
        if (res.code === 200) {
          this.$message.success("删除成功")
          this.getList()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleQuery() {
      this.queryParams.pageNo = 1
      this.getList()
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
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
