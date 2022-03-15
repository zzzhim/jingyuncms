<template>
  <el-dialog
    title="绑定"
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
import { bindInterfaceAdd } from "@/api/category"

export default {
  data() {
    return {
      loading: false,
      dialogVisible: false,
      queryPar: {},
      categoryList: []
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
              label: "分类列表",
              prop: "bindVideoCategoryId",
              placeholder: "请选择分类",
              inputType: "select",
              get list() {
                return [
                  ...that.categoryList
                ]
              },
              selectLabel: "categoryName",
              selectValue: "id",
            },
          ]
        },
      ]
    },
    rules() {
      return {
        categoryName: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    isShow(bool, params) {
      const { list, ...obj } = params
      this.dialogVisible = bool
      this.queryPar = obj
      this.categoryList = list
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const find = this.categoryList.find(item => item.id == this.queryPar.bindVideoCategoryId)

          const res = await bindInterfaceAdd({
            interfaceId: this.queryPar.id,
            interfaceCategoryId: this.queryPar.typeId,
            interfaceCategoryName: this.queryPar.typeName,
            bindVideoCategoryId: find.id,
            bindVideoCategoryName: find.categoryName,
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
  },
  created() {
  }
}
</script>

<style>

</style>