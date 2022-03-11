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
import { categoryVideoAdd } from "@/api/category"

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
              label: "父级分类ID",
              prop: "parent_id",
              placeholder: "请输入父级分类ID",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "分类名称",
              prop: "category_name",
              placeholder: "请输入分类名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "是否启用",
              prop: "status",
              placeholder: "请选择是否启用",
              inputType: "select",
              get list() {
                return [
                  {
                    value: '0',
                    text: '禁止',
                  },
                  {
                    value: '1',
                    text: '启用',
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
        category_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    isShow(bool, params) {
      this.dialogVisible = bool
      this.queryPar = {}
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await categoryVideoAdd({ ...this.queryPar })

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