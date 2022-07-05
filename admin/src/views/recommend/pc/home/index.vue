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
        prop="recommendIcon"
        label="icon"
      >
        <template slot-scope="scope">
          <el-image
            :scr="scope.row.recommendIcon"
            :preview-src-list="[ scope.row.recommendIcon ]"
          />
        </template>
      </el-table-column>

      <el-table-column
        prop="configName"
        label="配置名称"
      />

      <el-table-column
        prop="recommendName"
        label="推荐名称"
      />

      <el-table-column
        prop="styleName"
        label="推荐样式"
      />

      <el-table-column
        prop="updateTime"
        label="更新时间"
      />

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleView(scope.row)"
          >查看列表</el-button>
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
    async recommendConfigList() {
      const res = await recommendConfigList(this.queryParams)

      if(res.code === 200) {
        this.list = res.data.list
        this.total = res.data.count
      }
    },
    handleQuery() {

    },
    handleView(row) {
      this.$router.push('/pcRecommend/bind?id=' + row.id)
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
