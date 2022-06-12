<template>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    width="50%"
    v-loading="loading"
  >
    <AdvancedForm
      ref="AdvancedForm"
      :list="list"
      :formData="queryPar"
      :rules="rules"
    />

    <el-row type="flex" justify="end" align="middle" tag="div">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-row>

    <el-dialog
      title="绑定视频"
      :visible.sync="dialogVisibleBody"
      width="50%"
      append-to-body
    >
      <AccurateSearch
        :list="tableList"
        :formData="params"
        @queryTable="videoList"
        @handleQuery="handleQuery"
      />


      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          type="index"
          label="序号"
          >
        </el-table-column>
        <el-table-column
          prop="vodPic"
          label="视频封面"
        >
          <template slot-scope="scope">
            <el-image
              :scr="scope.row.vodPic"
              :preview-src-list="[ scope.row.vodPic ]"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="vodName"
          label="视频名称"
          >
        </el-table-column>
 
        <el-table-column
          prop="vodPlayFrom"
          label="播放器"
        >
          <template slot-scope="scope">
            {{ scope.row.vodPlayFrom.split("$$$").join(',') }}
          </template>
        </el-table-column>
        <el-table-column
          prop="vodTime"
          label="更新时间"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleBind(scope.row)"
            >绑定</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="params.pageNo"
        :limit.sync="params.pageSize"
        @pagination="videoList"
      />
    </el-dialog>
  </el-dialog>
</template>

<script>
import { recommendConfigBindEdit } from "@/api/recommend"
import { videoList } from "@/api/video"

export default {
  data() {
    return {
      loading: false,
      dialogVisible: false,
      dialogVisibleBody: false,
      queryPar: {},
      tableData: [],
      total: 0,
      params: {
        vodName: '',
        pageNo: 1,
        pageSize: 10,
      }
    }
  },
  computed: {
    list() {
      const that = this
      return [
        {
          list: [
            {
              span: 18,
              label: "排序",
              prop: "sort",
              placeholder: "请输入排序",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "获取视频",
              inputType: "button",
              name: '绑定',
              onClick() {
                that.dialogVisibleBody = true
                that.params.pageNo = 1
                that.videoList({
                  ...that.params,
                })
              }
            },
            {
              span: 18,
              label: "视频名称",
              prop: "vodName",
              placeholder: "请输入视频名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "视频封面",
              prop: "imgUrl",
              placeholder: "请输入视频封面",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "地区",
              prop: "vodArea",
              placeholder: "请输入地区",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "年份",
              prop: "vodYear",
              placeholder: "请输入年份",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "备注",
              prop: "vodRemarks",
              placeholder: "请输入备注",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "总集数",
              prop: "vodTotal",
              placeholder: "请输入总集数",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "详细介绍",
              prop: "vodContent",
              placeholder: "请输入详细介绍",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "主演",
              prop: "vodActor",
              placeholder: "请输入主演",
              inputType: "input",
              type: "text",
            },
          ]
        },
      ]
    },
    rules() {
      return {
        // categoryName: [
        //   { required: true, message: '请输入分类名称', trigger: 'blur' },
        // ],
      }
    },
    tableList() {
      return [
        {
          list: [
            {
              span: 24,
              label: "视频名称",
              prop: "vodName",
              placeholder: "请输入视频名称",
              inputType: "input",
              type: "text",
            }
          ]
        },
      ]
    }
  },
  methods: {
    isShow(bool, params) {
      this.dialogVisible = bool
      this.queryPar = { ...params }
    },
    async videoList() { 
      const res = await videoList({ ...this.params })

      if(res.code === 200) {
        this.tableData = res.data.list
        this.total = res.data.total
      }
    },
    handleBind(row) {
      this.dialogVisibleBody = false

      this.queryPar = { ...this.queryPar, ...row, imgUrl: row.vodPic, id: this.queryPar.id }
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await recommendConfigBindEdit({
            ...this.queryPar,
            sort: parseInt(this.queryPar.sort),
            configId: parseInt(this.$route.query.id),
          })

          if(res.code === 200) {
            this.$message.success("添加成功")
            this.dialogVisible = false
            this.$emit("getList")
            this.$emit("close")
          }
        } else {
          console.log('error submit!!')
        }

        this.loading = false
      })
    },
    handleQuery() {
      this.params.pageNo = 1
      this.videoList()
    },
  },
  created() {
  }
}
</script>

<style>

</style>