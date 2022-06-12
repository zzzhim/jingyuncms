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
  </el-dialog>
</template>

<script>
import { recommendConfigEdit } from "@/api/recommend"

export default {
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
              label: "排序",
              prop: "sort",
              placeholder: "请输入排序",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "推荐类型",
              prop: "configType",
              placeholder: "请选择推荐类型",
              inputType: "select",
              get list() {
                return [
                  {
                    id: '0',
                    label: "默认推荐",
                  },
                  {
                    id: '1',
                    label: "PC推荐",
                  },
                  {
                    id: '2',
                    label: "APP推荐",
                  },
                ]
              },
              selectLabel: "label",
              selectValue: "id",
            },
            {
              span: 18,
              label: "推荐名称",
              prop: "recommendName",
              placeholder: "请输入推荐名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "推荐icon",
              prop: "recommendIcon",
              placeholder: "推荐icon",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "推荐样式",
              prop: "styleType",
              placeholder: "请选择推荐样式",
              inputType: "select",
              get list() {
                return [
                  {
                    id: '0',
                    label: "轮播",
                  },
                  {
                    id: '1',
                    label: "正在热播",
                  },
                  {
                    id: '2',
                    label: "推荐",
                  },
                ]
              },
              selectLabel: "label",
              selectValue: "id",
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
      this.queryPar = params.row
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await recommendConfigEdit({ ...this.queryPar, sort: parseInt(this.queryPar.sort) })

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
}
</script>

<style>

</style>