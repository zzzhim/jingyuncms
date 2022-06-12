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
        prop="imgUrl"
        label="封面"
      >
        <template slot-scope="scope">
          <el-image
            :scr="scope.row.imgUrl"
            :preview-src-list="[ scope.row.imgUrl ]"
          />
        </template>
      </el-table-column>

      <el-table-column
        prop="vodName"
        label="视频名称"
      />

      <el-table-column
        prop="vodRemarks"
        label="备注"
      />

      <el-table-column
        prop="vodArea"
        label="地区"
      />

      <el-table-column
        prop="updatedAt"
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
import { recommendConfigBindList, recommendConfigBindDel } from '../../../../api/recommend'
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
      this.recommendConfigBindList()
    },
    async recommendConfigBindList() {
      const res = await recommendConfigBindList({
        configId: parseInt(this.$route.query.id)
      })

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
      this.$refs.Edit.isShow(true, { ...row })
    },
    async handleDelete(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await recommendConfigBindDel({ id: row.id })

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
