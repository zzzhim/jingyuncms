<template>
  <div style="padding:20px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="上传文件">
        <el-upload class="avatar-uploader" action="#" :show-file-list="false" :http-request="httpRequest"
          :on-success="handleAvatarSuccess">
          <el-button>上传地址</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="文件名称">
        <el-input v-model="form.fileName"></el-input>
      </el-form-item>
      <el-form-item label="文件地址">
        <el-input v-model="form.fileUrl"></el-input>
      </el-form-item>
      <el-form-item label="视频名称">
        <el-input v-model="form.vodName"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remarks"></el-input>
      </el-form-item>
      <el-form-item label="豆瓣Id">
        <el-input v-model="form.doubanId"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="videoUp">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { videoObjAdd, fileUpload } from '@/api/videoUzList';
import {  uploadImg,  } from '@/api/video';

export default {
  data(){
    return{
      form:{
        fileName: '',
        fileUrl: '',
        vodName: '',
        remarks: '',
        doubanId: '35460157',
      },
      loading:false
    }
  },
  methods: {
    async httpRequest(e) {
      console.log(e.file)
      const params = new FormData();
      params.append("file", e.file);
      let res = await fileUpload(params)
      console.log(res)
      if(res.code == 200){
        this.$message.success(res.message)
        this.form.fileUrl = res.data.m3u8Url
        this.form.fileName = e.file.name.split('.')[0]

      }else{
        this.$message.error(res.message)
      }
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
    },
    async videoUp(){
      let res = await videoObjAdd(this.form)
      if (res.code == 200) {
        this.$message.success(res.message)
        this.form={
          fileName: '',
          fileUrl: '',
          vodName: '',
          desc: '',
          doubanId: '35460157',
        }
      } else {
        this.$message.error(res.message)
      }
    },
  },
}
</script>
<style lang="scss">
  
</style>