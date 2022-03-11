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
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        width="150"
        >
      </el-table-column>
      <el-table-column
        prop="interfaceName"
        label="接口名称">
      </el-table-column>
      <el-table-column
        prop="interfaceUrl"
        label="接口地址"
        width="400"
        >
      </el-table-column>

      <el-table-column
        prop="interfaceType"
        label="接口类型"
        width="100"
        >
        <template scope="scope">
          <el-tag
            v-if="scope.row.interfaceType === '1'"
            effect="dark">
            视频
          </el-tag>
          <el-tag
            v-else-if="scope.row.interfaceType === '2'"
            effect="dark">
            文章
          </el-tag>
          <el-tag
            v-else-if="scope.row.interfaceType === '3'"
            effect="dark">
            图片
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="responseType"
        label="返回类型"
        width="100"
        >
        <template scope="scope">
          <el-tag
            v-if="scope.row.responseType === '1'"
            effect="dark">
            json
          </el-tag>
          <el-tag
            v-else-if="scope.row.responseType === '2'"
            effect="dark">
            xml
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="cmsType"
        label="cms类型"
        width="150"
        >
        <template scope="scope">
          <template v-for="item in cmsTypeList">
            <el-tag
              :key="item.id"
              v-if="scope.row.cmsType == item.id"
              effect="dark">
              {{ item.name }}
            </el-tag>
          </template>
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
            @click="handleCollectionSetUp(scope.$index, scope.row)">采集配置</el-button>
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
import { categoryVideoTree } from '@/api/category'
import Add from "./add"
import Edit from "./edit"

export default {
  components: {
    Add,
    Edit,
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
        // {
        //   span: 8,
        //   label: "接口名称",
        //   prop: "keyword",
        //   placeholder: "请输入接口名称",
        //   inputType: "input",
        //   type: "text",
        // },
        // {
        //   span: 8,
        //   label: "接口名称",
        //   prop: "keyword",
        //   placeholder: "请输入接口名称",
        //   inputType: "input",
        //   type: "text",
        // },
      ];
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
      this.$refs.Add.isShow(true);
    },
    handleCollectionSetUp(index, row) {
      if(row.cmsType == "2") {
        this.$router.push({ path: '/collection/maccms', query: { url: row.interfaceUrl } })
      }
    },
    handleEdit(index, row) {
      this.$refs.Edit.isShow(true, { ...row });
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await interfaceDel({ id: row.id })

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
