<template>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    width="50%"
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
import { mapGetters } from "vuex"
// import { addRecomContent } from "@/api/recom/config"

export default {
  components: {
  },
  data() {
    return {
      dialogVisible: false,
      bool: false,
      queryPar: {},
      frameList: [],
      fileList: [],
    }
  },
  computed: {
    // ...mapGetters("enums", ["enumsGetMap", "getEnumsText"]),
    list() {
      const that = this;

      return [
        {
          list: [
            {
              span: 18,
              label: "排序",
              prop: "sortNum",
              placeholder: "请输入排序号",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "产品线",
              prop: "ownPort",
              placeholder: "请选择产品线",
              inputType: "select",
              get list() {
                return that.enumsGetMap('ownPortEnum');
              },
              selectLabel: "text",
              selectValue: "value",
            },
            {
              span: 18,
              label: "内容类型",
              prop: "contentType",
              placeholder: "请选择内容类型",
              inputType: "select",
              get list() {
                return that.enumsGetMap('recomContentTypeEnum');
              },
              selectLabel: "text",
              selectValue: "value",
            },
            {
              span: 18,
              label: "内容名称",
              prop: "contentName",
              placeholder: "请输入内容名称",
              inputType: "input",
              type: "text",
            },
            {
              span: 24,
              label: "封面图片",
              prop: "imgUrl",
              placeholder: "请上传图片",
              inputType: "image",
              isOneImg: true,
              fileList: that.fileList,
            },
            {
              span: 18,
              label: "是否跳转",
              prop: "isJump",
              placeholder: "请选择是否跳转",
              inputType: "select",
              get list() {
                return that.enumsGetMap('yesOrNoEnum');
              },
              selectLabel: "text",
              selectValue: "value",
            },
            {
              span: 18,
              label: "跳转参数",
              prop: "jumpParam",
              placeholder: "请输入跳转参数",
              inputType: "input",
              type: "text",
            },
            {
              span: 18,
              label: "跳转地址",
              prop: "connUrl",
              placeholder: "请输入跳转地址",
              inputType: "input",
              type: "text",
            },
          ]
        },
      ]
    },
    rules() {
      return {
        sortNum: [ // 排序
          { required: true, message: '请输入排序号', trigger: 'blur' },
        ],
        ownPort: [ // 排序
          { required: true, message: '请选择产品线', trigger: 'blur' },
        ],
        contentName: [ // 排序
          { required: true, message: '请输入内容名称', trigger: 'blur' },
        ],
        imgUrl: [ // 书籍ID
          { required: true, message: '请上传图片', trigger: 'blur' },
        ],
        isJump: [ // 作者ID
          { required: true, message: '请选择是否跳转', trigger: 'blur' },
        ],
        jumpParam: [ // 书籍名
          { required: true, message: '请输入跳转参数', trigger: 'blur' },
        ],
        connUrl: [ // 书籍名
          { required: true, message: '请输入跳转地址', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    isShow(bool, params) {
      this.dialogVisible = bool
      this.queryPar = {}
      this.fileList = []
    },
    handleSubmit() {
      this.$refs.AdvancedForm.$refs['accurateSearch'].validate(async (valid) => {
        if (valid) {
          const res = await addRecomContent({ ...this.queryPar, regionId: this.$route.query.regionId })

          if(res.code === 200) {
            this.$message.success("添加成功")
            this.dialogVisible = false
            this.$emit("getList")
            this.$emit("close")
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  created() {
  }
}
</script>

<style>

</style>