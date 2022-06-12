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
            >绑定</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-row type="flex" justify="end" align="middle" tag="div">
        <el-button @click="dialogVisibleBody = false">取 消</el-button>
        <!-- <el-button type="primary" @click="handleSubmit">确 定</el-button> -->
      </el-row>
    </el-dialog>
  </el-dialog>
</template>

<script>
import { recommendConfigAdd } from "@/api/recommend"
import { videoList } from "@/api/video"

export default {
  data() {
    return {
      loading: false,
      dialogVisible: false,
      dialogVisibleBody: false,
      queryPar: {},
      tableData: [],
      params: {
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
              label: "推荐名称",
              prop: "recommend_name",
              placeholder: "请输入推荐名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "推荐icon",
              prop: "recommend_icon",
              placeholder: "推荐icon",
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
    }
  },
  methods: {
    isShow(bool, params) {
      this.dialogVisible = bool
      this.queryPar = {}
    },
    async videoList(params = {}) {
      const res = await videoList(params)

      if(res.code === 200) {
        this.tableData = res.data.list
      }
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await recommendConfigAdd({ ...this.queryPar, sort: parseInt(this.queryPar.sort) })

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
  },
  created() {
  }
}
</script>

<style>

</style>