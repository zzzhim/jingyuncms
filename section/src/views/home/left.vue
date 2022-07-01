<template>
  <el-form ref="form" :model="uploadSetting" label-width="120px">
    <el-form-item label="选择线路">
      <el-radio
        v-for="item,index in lineList"
        :key="index"
        v-model="uploadSetting.activeNum"
        :label="item.value"
      >{{ item.name }}</el-radio>
    </el-form-item>

    <el-form-item label="图床">
      <el-checkbox-group v-model="uploadSetting.uploadImgIds" :max="uploadSetting.activeNum">
        <el-checkbox
          :label="item.id"
          v-for="item,index in uploadImgList"
          :key="index"
        >{{ item.configName }}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label='是否删除视频'>
        <el-radio v-model="uploadSetting.isDelVideo" label="1">是</el-radio>
        <el-radio v-model="uploadSetting.isDelVideo" label="0">否</el-radio>
    </el-form-item>

    <el-form-item label='重新拉视频'>
      <el-radio-group v-model="uploadSetting.refreshVideo">
        <el-radio :disabled="uploadSetting.isDelVideo === '0'" label="1">是</el-radio>
        <el-radio label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button @click="testUploadList">测试</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: 'HomeViewLeft',
  components: {},
  data() {
    return {
      form:{
        activeNum: 3,
        isDelVideo: '1',
        uploadImgIds: [],
        refreshVideo: '1',
      },
    }
  },
  computed: {
    ...mapState("uploadStore", [ "uploadImgList", "uploadSetting", "lineList" ]),
  },
  methods: {
    ...mapActions("uploadStore", [ "getUploadList", "testUploadList" ]),
  },
  mounted() {
    this.getUploadList()
  },
}
</script>

<style lang="scss">
  .el-scrollbar__wrap {
    // width: 100%;
    overflow: auto;
  }
</style>

<style lang="scss" scoped>
  .left {
    padding:20px 0;
    width: 30% !important;
    height: 100%;
    background-color: #FFFFFF;
  }
</style>
