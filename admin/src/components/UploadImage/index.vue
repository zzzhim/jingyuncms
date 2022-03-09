<template>
  <div class="component-upload-image">
    <el-upload
      :disabled="disabled"
      :action="uploadImgUrl"
      list-type="picture-card"
      :on-success="handleUploadSuccess"
      :on-remove="handleRemoveImg"
      :before-upload="handleBeforeUpload"
      :on-error="handleUploadError"
      name="file"
      :show-file-list="true"
      :headers="headers"
      style="display: inline-block; vertical-align: top"
      :http-request="uploadFile"
      :file-list="fileList"
      v-loading="loading"
      :on-preview="handlePictureCardPreview"
    >
      <img v-if="value" :src="value" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <el-dialog width="50%" :visible.sync="dialogVisible" append-to-body destroy-on-close>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import { upload } from "@/api/file";

export default {
  components: {},
  data() {
    return {
      uploadImgUrl: process.env.VUE_APP_BASE_API + "/cms/file/upload", // 上传的图片服务器地址
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      loading: false,
      dialogVisible: false,
      dialogImageUrl: "",
    };
  },
  props: {
    isOneImg: Boolean,
    value: {
      type: String,
      default: "",
    },
    imgFile: String,
    fileList: Array,
    disabled: Boolean,
  },
  methods: {
    handleUploadSuccess(res, file, fileList) {
      this.$emit("input", res.data.url);
      this.updateFileList(fileList)

      this.loading = false;
    },
    /**
     * 
     * @description 移除文件列表
     */
    handleRemoveImg(file, fileList) {
      this.updateFileList(fileList)
    },
    handleBeforeUpload() {
      this.loading = true;
    },
    handleUploadError() {
      this.$message({
        type: "error",
        message: "上传失败",
      });

      this.loading = false;
    },
    uploadFile({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return upload(formData)
    },
    updateFileList(fileList) {
      fileList = fileList.map(item => {
        if(typeof item.response === "object" && item.response.code === 200) {
          const res = item.response

          return {
            ...item,
            url: res.data.url
          }
        }else {
          return {
            ...item,
            url: item.url
          }
        }
      })

      if(this.isOneImg) {
        this.$emit("update:fileList", [ fileList[fileList.length - 1] ])
        this.$emit("update:imgFile", fileList[fileList.length - 1].url)
      }else {
        this.$emit("update:fileList", fileList)
      }

    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.avatar {
  width: 100%;
  height: 100%;
}

.component-upload-image {
  &::v-deep {
    .is-disabled + .el-upload {
      display: none;
    }
  }
}
</style>