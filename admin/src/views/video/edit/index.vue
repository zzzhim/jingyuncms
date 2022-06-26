<template>
  <div>
    <el-dialog title="编辑" :visible.sync="dialogVisible" v-if="dialogVisible" width="95%" top="20px"
      :before-close="handleClose">
      <div style="height:calc(100vh - 230px);overflow:auto;padding: 20px;">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-form-item label="豆瓣ID">
              <el-col :span="12">
                <el-input v-model="form.vodDoubanId"></el-input>
              </el-col>
              <el-col :span="12">
                <el-button type="primary" @click="getDoubanVideoData" style="margin-left:20px">获取数据</el-button>
              </el-col>
            </el-form-item>
            <el-col :span="12">

              <el-form-item label="视频分类">
                <el-select v-model="form.categoryId" placeholder="请选择活动区域">
                  <el-option :label="item.categoryName" v-for="item in  tableData" :key="item.id" :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="视频名称">
                <el-input v-model="form.vodName"></el-input>
              </el-form-item>
              <el-form-item label="副标题">
                <el-input v-model="form.vodSub"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                <el-radio-group v-model="form.vodStatus">
                  <el-radio :label="0">未审</el-radio>
                  <el-radio :label="1">已审</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="标签">
                <el-input v-model="form.vodTag"></el-input>
              </el-form-item>

              <el-form-item label="总集数">
                <el-input v-model="form.vodTotal"></el-input>
              </el-form-item>
              <el-form-item label="年份">
                <el-input v-model="form.vodYear"></el-input>
              </el-form-item>
              <el-form-item label="资源类别">
                <el-input v-model="form.vodState"></el-input>
              </el-form-item>
              <el-form-item label="豆瓣评分">
                <el-input v-model="form.vodDoubanScore"></el-input>
              </el-form-item>

              <!-- <el-form-item label="简介">
                <el-input  v-model="form.vodNotes"></el-input>
              </el-form-item> -->

              <!-- <el-form-item label="播放备注">
                <el-input  v-model="form.vodPlayNote"></el-input>
              </el-form-item> -->


              <el-form-item label="封面">
                <el-upload class="avatar-uploader" action="#" :show-file-list="false" :http-request="httpRequest"
                  :on-success="handleAvatarSuccess">
                  <img v-if="form.vodPic" :src="form.vodPic" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">

              <el-form-item label="备注">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.vodRemarks">
                </el-input>
              </el-form-item>
              <el-form-item label="总点击量">
                <el-input v-model="form.vodHits"></el-input>
              </el-form-item>
              <el-form-item label="日点击量">
                <el-input v-model="form.vodHitsDay"></el-input>
              </el-form-item>
              <el-form-item label="周点击量">
                <el-input v-model="form.vodHitsWeek"></el-input>
              </el-form-item>
              <el-form-item label="月点击量">
                <el-input v-model="form.vodHitsMonth"></el-input>
              </el-form-item>
              <el-form-item label="时长">
                <el-input v-model="form.vodDuration"></el-input>
              </el-form-item>
              <el-form-item label="顶数">
                <el-input v-model="form.vodUp"></el-input>
              </el-form-item>
              <el-form-item label="踩数">
                <el-input v-model="form.vodDown"></el-input>
              </el-form-item>
              <el-form-item label="平均分">
                <el-input v-model="form.vodScore"></el-input>
              </el-form-item>
              <el-form-item label="总评分">
                <el-input v-model="form.vodScoreAll"></el-input>
              </el-form-item>
              <el-form-item label="评分次数">
                <el-input v-model="form.vodScoreNum"></el-input>
              </el-form-item>
              <el-form-item label="试看时长分">
                <el-input v-model="form.vodTrysee"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24" style="margin:20px 0;border:1px solid #eee;padding:20px">
              <div v-for="(item,index) in vodPlayFromList" :key="index" style="margin:0 0 50px 0">
                <el-form-item label="播放组">
                  <el-select v-model="vodPlayFromList[index]" placeholder="请选择">
                    <el-option v-for="item2 in options" :key="item2.playerCode" :label="item2.playerName"  :value="item2.playerCode"></el-option>
                  </el-select>
                  <el-button type="primary" style="margin-left:20px" @click="delVideo(index)">删除</el-button>

                </el-form-item>
                <el-form-item label="播放地址">
                  <el-input type="textarea" :rows="5" v-model="vodPlayUrlList[index]"></el-input>
                </el-form-item>
              </div>
              <el-button type="primary" @click="addVideo()" style="display:block;margin:auto">新增</el-button>
            </el-col>
            <el-col :span="12">
              <el-form-item label="详细介绍">
                <el-input v-model="form.vodContent"></el-input>
              </el-form-item>
              <el-form-item label="简介">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.vodBlurb">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>


      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="upData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import { fileImg ,videoEdit,uploadImg,getDoubanVideoData } from '@/api/video';

import { playerList, playerDel, playerEdit } from "@/api/player";

export default {
  data() {
    return {
      dialogVisible:false,
      form:{
   
      },
      options:[
        { name: 'qq', id: 'qq' },
        { name: 'youku', id:'youku'},
      ],
      tableData:[],
      vodPlayFromList:[],
      vodPlayUrlList:[]
    }
  },
  mounted() {
    // this.categoryVideoTree()
  },
  methods: {
    async playerList() {
      let res = await playerList()
      this.options = res.data
    },
    delVideo(index){
      this.vodPlayFromList.splice(index, 1)
      this.vodPlayUrlList.splice(index, 1)
    },
    addVideo(){
      this.vodPlayFromList.push('')
      this.vodPlayUrlList.push('')
    },
    async getDoubanVideoData(){
      // 26873582
      let res = await getDoubanVideoData({doubanId:this.form.vodDoubanId})
      this.form.vodPic =  res.data.imgUrl
      this.form.vodScore = res.data.pingfen
      this.form.vodBlurb =  res.data.desc
      this.form.vodDuration = res.data.pianchang
      this.form.vodYear = res.data.time
      this.form.vodName = res.data.videoName
      this.form.vodTag = res.data.type

      
    },
    categoryVideoTree(){
        this.tableData = JSON.parse( this.$store.state.app.videotreeList)
    },
    async httpRequest(e){
      const params = new FormData();
      params.append("file", e.file);
      let res = await uploadImg(params)
      this.form.vodPic = res.data.imgUrl
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
    },
    handleClose(){
      this.form = {
        
      }
      this.dialogVisible = false
    },
    async upData(){
      let vodPlayFrom = ''
      let vodPlayUrl = ''
      
      for (let index = 0; index < this.vodPlayFromList.length; index++) {
        if (index < this.vodPlayFromList.length - 1 ){
          vodPlayFrom += this.vodPlayFromList[index] + '$$$'
          vodPlayUrl += this.vodPlayUrlList[index] + '$$$'

        }else{
          vodPlayFrom += this.vodPlayFromList[index]
          vodPlayUrl += this.vodPlayUrlList[index] 

        }
        
      }
      this.form.vodPlayFrom = vodPlayFrom
      this.form.vodPlayUrl = vodPlayUrl
      let res = await videoEdit(this.form)
      if(res.code == 200){
        this.$emit('shuaxin')
        this.$message.success(res.message)
        this.handleClose()
      }else{
        this.$message.error(res.message)
      }

    },
    init(e){
      this.form = e

      let vodPlayFromList = []
      let vodPlayUrlList = []


      if (this.form.vodPlayFrom){
        for (let index = 0; index < this.form.vodPlayFrom.split('$$$').length; index++) {
          vodPlayFromList.push(this.form.vodPlayFrom.split('$$$')[index])
        }
      }

      if (this.form.vodPlayUrl) {
        for (let index = 0; index < this.form.vodPlayUrl.split('$$$').length; index++) {
          vodPlayUrlList.push(this.form.vodPlayUrl.split('$$$')[index])
        }
      }
    

      this.vodPlayFromList = vodPlayFromList
      this.vodPlayUrlList = vodPlayUrlList
      this.categoryVideoTree()
      this.playerList()
      this.dialogVisible = true
    }
  },
}
</script>
<style lang="scss">
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>