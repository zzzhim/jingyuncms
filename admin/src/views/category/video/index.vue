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
      :data="treeData"
      row-key="id"
      default-expand-all
      :tree-props="{children: 'children'}"
    >
      <el-table-column
        prop="parentId"
        label="父级分类"
        :formatter="formatter"
        >
      </el-table-column>

      <el-table-column
        prop="categoryName"
        label="分类名称"
        >
      </el-table-column>

      <el-table-column
        prop="status"
        label="是否启用"
        >
        <template scope="scope">
          <template v-if="scope.row.status === '0'">禁止</template>
          <template v-if="scope.row.status === '1'">启用</template>
        </template>
      </el-table-column>

      <el-table-column
        prop="updatedAt"
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNo"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <Add ref="Add" @getList="getList" />
    <Edit ref="Edit" @getList="getList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { categoryVideoTree, categoryVideoDel } from '@/api/category'
import { listToTree } from '@/utils/listToTree'
import Add from "./add"
import Edit from "./edit"

export default {
  components: {
    Add,
    Edit,
  },
  data() {
    return {
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
    },
    treeData() {
      return this.listToTree([ ...JSON.parse(JSON.stringify(this.tableData)) ])
    }
  },
  methods: {
    getList() {
      this.categoryVideoTree()
    },
    handleQuery() {
      this.queryParams.pageNo = 1
      this.getList()
    },
    async categoryVideoTree(params = {}) {
      const res = await categoryVideoTree(params)

      if(res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.total || 0
      }
    },
    handleAdd() {
      this.$refs.Add.isShow(true, { list: [ ...this.tableData ] });
    },
    handleEdit(index, row) {
      const list = this.tableData.filter(item => item.id != row.id)

      this.$refs.Edit.isShow(true, { ...row, list: [ ...list] });
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await categoryVideoDel({ id: row.id })

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
    },
    listToTree,
    formatter(row, column, cellValue, index) {
      const find = this.tableData.find(item => item.id == row.parentId)

      return find ? find.categoryName : '顶级分类'
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
