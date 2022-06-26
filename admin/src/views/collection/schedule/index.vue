<template>
  <div class="dashboard-container">
    <AccurateSearch
      :list="list"
      :formData="queryParams"
      @queryTable="getList"
      @handleQuery="handleQuery"
      :isOneRow="true"
      >
    </AccurateSearch>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="接口ID"
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
            @click="handleCollectionStart(scope.row, 24)"
          >定时采集</el-button>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getInterfaceList, interfaceDel } from '@/api/interface'
import { collectionMaccmsVideo } from '@/api/collection'

export default {
  components: {
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
    getList() {
      this.getInterfaceList()
    },
    handleQuery() {
      this.queryParams.pageNo = 1
      this.getList()
    },
    async getInterfaceList(params = {}) {
      const res = await getInterfaceList(params)

      if(res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.total || 0
      }
    },
    async handleCollectionStart(row, h) {
      // const res = await collectionMaccmsVideo({ id: row.id, h })

      // if(res.code === 200) {
      //   this.$message.success("操作成功")
      // }
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
