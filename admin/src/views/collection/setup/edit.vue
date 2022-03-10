<template>
  <el-dialog
    title="编辑"
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
  </el-dialog>
</template>

<script>
import { interfaceEdit } from "@/api/interface"

export default {
  components: {
  },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      queryPar: {},
    }
  },
  computed: {
    list() {
      return [
        {
          list: [
            {
              span: 18,
              label: "接口名称",
              prop: "interfaceName",
              placeholder: "请输入接口名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "接口地址",
              prop: "interfaceUrl",
              placeholder: "请输入接口地址",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "接口类型",
              prop: "interfaceType",
              placeholder: "请选择接口类型",
              inputType: "select",
              get list() {
                return [
                  {
                    value: '1',
                    text: '视频',
                  },
                  {
                    value: '2',
                    text: '文章',
                  },
                  {
                    value: '3',
                    text: '图片',
                  },
                ]
              },
              selectLabel: "text",
              selectValue: "value",
            },
            {
              span: 18,
              label: "返回类型",
              prop: "responseType",
              placeholder: "请选择返回类型",
              inputType: "select",
              get list() {
                return [
                  {
                    value: '1',
                    text: 'json',
                  },
                  {
                    value: '2',
                    text: 'xml',
                  },
                ]
              },
              selectLabel: "text",
              selectValue: "value",
            },
            {
              span: 18,
              label: "CMS类型",
              prop: "cmsType",
              placeholder: "请选择CMS类型",
              inputType: "select",
              get list() {
                return [
                  {
                    value: '1',
                    text: '鲸云cms',
                  },
                  {
                    value: '2',
                    text: '苹果cms',
                  },
                  {
                    value: '3',
                    text: '海洋cms',
                  },
                  {
                    value: '4',
                    text: '飞飞cms',
                  },
                  {
                    value: '5',
                    text: 'wpCms',
                  },
                  {
                    value: '6',
                    text: '帝国cms',
                  },
                ]
              },
              selectLabel: "text",
              selectValue: "value",
            },
          ]
        },
      ]
    },
    rules() {
      return {
        interfaceName: [
          { required: true, message: '请输入接口名称', trigger: 'blur' },
        ],
        interfaceUrl: [
          { required: true, message: '请输入接口地址', trigger: 'blur' },
        ],
        interfaceType: [
          { required: true, message: '请选择接口类型', trigger: 'blur' },
        ],
        responseType: [
          { required: true, message: '请选择返回类型', trigger: 'blur' },
        ],
        cmsType: [
          { required: true, message: '请选择CMS类型', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    isShow(bool, params) {
      this.dialogVisible = bool
      this.queryPar = { ...params }
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await interfaceEdit({ ...this.queryPar })

          if(res.code === 200) {
            this.$message.success("编辑成功")
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