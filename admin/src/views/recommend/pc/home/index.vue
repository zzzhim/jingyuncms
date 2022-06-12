<template>
  <div class="dashboard-container">
    <AccurateSearch
      :list="list"
      :formData="queryParams"
      @queryTable="getList"
      @handleQuery="handleQuery"
      :isOneRow="true"
      >
      <el-button
        slot="toolbar"
        type="primary"
        icon="el-icon-plus"
        size="mini"
        @click="handleAdd"
      >新增</el-button>
    </AccurateSearch>

    <el-table
      :data="list"
      style="width: 100%"
    >
      <el-table-column
        prop="sort"
        label="排序"
      />

      <el-table-column
        prop="recommend_icon"
        label="icon"
      >
        <template slot-scope="scope">
          <el-image
            :scr="scope.row.recommend_icon"
            :preview-src-list="[ scope.row.recommend_icon ]"
          />
        </template>
      </el-table-column>

      <el-table-column
        prop="config_name"
        label="配置名称"
      />

      <el-table-column
        prop="recommend_name"
        label="推荐名称"
      />

      <el-table-column
        prop="style_name"
        label="推荐样式"
      />

      <el-table-column
        prop="update_time"
        label="更新时间"
      />

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Add ref="Add" @getList="getList" />
    <Edit ref="Edit" @getList="getList" />
  </div>
</template>

<script>
import { recommendConfigList, recommendConfigDel } from '../../../../api/recommend'
import Add from "./add"
import Edit from "./edit"

export default {
  components: {
    Add,
    Edit,
  },
  data() {
    return {
      list: [],
      total: 0,
      queryParams: {
        keyword: ''
      }
    }
  },
  computed: {
    // ...mapGetters([])
  },
  methods: {
    getList() {
      this.recommendConfigList()
    },
    async recommendConfigList(params = {}) {
      const res = await recommendConfigList(params)

      if(res.code === 200) {
        this.list = res.data.list
        this.total = res.data.count
      }
    },
    handleQuery() {

    },
    handleAdd() {
      this.$refs.Add.isShow(true)
    },
    handleEdit(row) {
      this.$refs.Edit.isShow(true, { row })
    },
    async handleDelete(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await recommendConfigDel({ id: row.id })

        if(res.code === 200) {
          this.$message.success("删除成功")
          this.getList()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
