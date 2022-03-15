<template>
  <div class="dashboard-container">
    <div>
      <el-tag
        class="tag"
        v-for="item in classList"
        :key="item.type_id"
        :type=" bindCategory(item) === '未绑定' ? 'danger' : 'success'"
        @click="handleBindVideo(item)"
      >{{ item.type_name }}({{ bindCategory(item) }})</el-tag>
    </div>

    <AccurateSearch
      :list="list"
      :formData="queryParams"
      @queryTable="getList"
      @handleQuery="handleQuery"
      :isOneRow="true"
      >
      <el-button slot="toolbar" type="primary" @click="handleClickAll">添加定时任务</el-button>
    </AccurateSearch>

    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading"
      @selection-change="handleSelectionChange"
      @select-all="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

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

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleClick(scope.row)">采集</el-button>
        </template>
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

    <BindCategory ref="BindCategory" @getList="bindInterfaceList" />
  </div>
</template>

<script>
import { maccmsProxy, maccmsDetailProxy } from "@/api/proxy"
import { videoAdd } from "@/api/video"
import { underlineToHump } from "@/utils/underlineToHump"
import { bindInterfaceList, categoryVideoTree } from "@/api/category"
import BindCategory from "./bindCategory.vue"

export default {
  components: {
    BindCategory
  },
  data() {
    return {
      loading: false,
      classList: [],
      total: 0,
      tableData: [],
      pageSizes: [ 20 ],
      queryParams: {
        keyword: '',
        type_id: '',
        pg: 1,
        pageSize: 10,
      },
      category: [],
      bindCategoryList: [],
      multipleSelection: [],
      url: '',
    }
  },
  computed: {
    list() {
      const that = this
      return [
        {
          span: 12,
          label: "视频名称",
          prop: "keyword",
          placeholder: "请输入视频名称",
          inputType: "input",
          type: "text",
        },
        {
          span: 12,
          label: "分类列表",
          prop: "type_id",
          placeholder: "请选择分类",
          inputType: "select",
          get list() {
            return [
              ...that.classList
            ]
          },
          selectLabel: "type_name",
          selectValue: "type_id",
        },
      ]
    },
  },
  methods: {
    async getList() {
      this.maccmsProxy()
    },
    handleQuery() {
      this.queryParams.pg = 1
      this.maccmsProxy()
    },
    async bindInterfaceList() {
      const res = await bindInterfaceList({ id: this.$route.query.id })

      if(res.code === 200) {
        this.bindCategoryList = res.data.list
      }
    },
    async maccmsProxy() {
      try {
        if(this.loading) {
          return 
        }

        this.loading = true

        let params = '&ac=list'
        if(this.queryParams.keyword) {
          params = params + `&wd=${encodeURIComponent(this.queryParams.keyword)}`
        }

        if(this.queryParams.type_id) {
          params = params + `&t=${this.queryParams.type_id}`
        }

        const res = await maccmsProxy({ url: this.$route.query.url + `&ac=list&pg=${this.queryParams.pg}${params}`, method: 'get' })

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
    async maccmsDetailProxy(ids) {
      try {
        if(this.loading) {
          return 
        }

        this.loading = true

        const res = await maccmsDetailProxy({ url: this.$route.query.url + `&ac=detail&ids=${ids}`, method: 'get' })

        if(res.code === 200 && res.data.code === 1) {
          this.$message.success('采集成功，开始添加视频数据')

          this.videoAdd(res.data.list)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async categoryVideoTree(params = {}) {
      const res = await categoryVideoTree(params)

      if(res.code === 200) {
        this.category = res.data.list
      }
    },
    handleBindVideo(item) {
      this.$refs.BindCategory.isShow(
        true,
        {
          id: this.$route.query.id,
          typeId: item.type_id,
          typeName: item.type_name,
          list: [ ...this.category]
        }
      )
    },
    bindCategory(item) {
      const find = this.bindCategoryList.find(ele => ele.interfaceCategoryId === item.type_id)

      return find ? find.bindVideoCategoryName : '未绑定'
    },
    handleClick(row) {
      this.maccmsDetailProxy(row.vod_id)
    },
    handleClickAll() {
      const str = this.multipleSelection.map(item => item.vod_id).join(',')

      if(str.length === 0) {
        return this.$message.warning('请选择采集数据')
      }

      this.maccmsDetailProxy(str)
    },
    // 选择按钮
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async videoAdd(list) {
      try {
        list = list.map(item => {
          const obj = {}
          for(let key in item) {
            obj[underlineToHump(key)] = item[key]
          }

          return obj
        })

        const res = await videoAdd({
          interfaceId: this.$route.query.id,
          list
        })

        if(res.code === 200) {
          this.$message.success('添加视频成功')
        }

      } catch (error) {
        
      } finally {
        this.loading = false
      }
      
    }
  },
  created() {
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
