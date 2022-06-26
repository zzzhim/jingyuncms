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
              label: "定时类型",
              prop: "type",
              placeholder: "请选择定时类型",
              inputType: "select",
              get list() {
                return [
                  {
                    id: 1,
                    name: "采集视频",
                  },
                  {
                    id: 2,
                    name: "百度推送",
                  },
                  {
                    id: 3,
                    name: "搜狗推送",
                  },
                  {
                    id: 4,
                    name: "必应推送",
                  },
                ]
              },
              selectLabel: "name",
              selectValue: "id",
            },
            {
              span: 18,
              label: "采集cms",
              prop: "cmsType",
              placeholder: "请选择采集cms",
              inputType: "select",
              get list() {
                return [
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
                ]
              },
              selectLabel: "name",
              selectValue: "id",
            },
            {
              span: 18,
              label: "接口ID",
              prop: "interfaceId",
              placeholder: "请输入接口ID",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "采集范围",
              prop: "h",
              placeholder: "请选择采集范围",
              inputType: "select",
              get list() {
                return [
                  {
                    id: 1,
                    name: "全部",
                  },
                  {
                    id: 2,
                    name: "本周",
                  },
                  {
                    id: 3,
                    name: "当天",
                  },
                ]
              },
              selectLabel: "name",
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
      this.dialogVisible = bool
    },
    handleSubmit() {
      if(this.loading) {
        return 
      }
      this.loading = true

      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const find = this.categoryList.find(item => item.id == this.queryPar.bindVideoCategoryId)
          console.log(this.queryPar)
          return
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