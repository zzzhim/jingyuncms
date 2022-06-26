<template>
  <div class="dashboard-container">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="视频名称">
        <el-input v-model="form.vodName" @change="sousuo" placeholder="视频名称"></el-input>
      </el-form-item>
      <el-form-item label="视频分类">
        <el-select v-model="form.categoryId" @change="sousuo" placeholder="视频分类">
          <el-option :label="item.categoryName" v-for="item in  tableData" :key="item.id" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table
      :data="list" height="calc(100vh - 270px)" v-loading="loading"
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="序号"
        >
      </el-table-column>
      <el-table-column
        prop="vodPic"
        label="视频封面"
      >
        <template slot-scope="scope">
            <img :src="scope.row.vodPic" style="height:88px" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="vodName"
        label="视频名称"
        >
      </el-table-column>
      <el-table-column
        prop="categoryId"
        label="分类"
        >
        <template  slot-scope="scope">
          <div v-if="scope.row.categoryId">
            {{scope.row.categoryName}}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="vodPlayFrom"
        label="播放器"
      >
        <template slot-scope="scope">
          {{ scope.row.vodPlayFrom.split("$$$").join(',') }}
        </template>
      </el-table-column>
      <el-table-column
        prop="vodTime"
        label="更新时间"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination style="text-align:center" :pageSize="form.pageSize" :page="form.pageNo" :total="total" @pagination="pagination"></Pagination>
    <videoeEdit ref="videoeEdit" @shuaxin="videoList"></videoeEdit>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { videoList,videoDel } from '../../../api/video'
import Pagination from '@/components/Pagination';
import videoeEdit from '../edit/index'
// videoeEdit
export default {
  components:{
    Pagination,videoeEdit
  },
  data() {
    return {
      list: [],
      total: 0,
      form:{
        pageSize:10,
        pageNo:1,
        vodName:'',
        categoryId:''
      },
      total:0,
      loading:false,
      tableData:[],
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
  },
  methods: {
    categoryVideoTree(){
        if(this.$store.state.app.videotreeList){
          this.tableData = JSON.parse(this.$store.state.app.videotreeList)

        }else{
          setTimeout(() => {
            this.tableData = JSON.parse(this.$store.state.app.videotreeList)
          }, 1000);
        }
    },
    categoryIdFun(id){

      console.log(this.tableData )

      // return
      for (let index = 0; index < this.tableData.length; index++) {
        if(this.tableData[index].id == id){
           return this.tableData[index].categoryName

        }
      }
    },
    error(e){
      console.log(e)
    },
    sousuo(){
      this.form.pageNo = 1
      this.videoList()

    },
   
    pagination(e){
      console.log(e)
      this.form.pageSize = e.limit
      this.form.pageNo =  e.page
      this.videoList()

    },
    getList() {
      this.videoList()
    },
    async videoList() {
      this.loading = true
      const res = await videoList(this.form)
      this.loading = false

      if(res.code === 200) {
      
        for (let index = 0; index <  res.data.list.length; index++) {
           res.data.list[index].categoryName = await this.categoryIdFun(res.data.list[index].categoryId)
        }
        this.list = res.data.list

        this.total = res.data.total
      }
    },
    handleEdit(index,e) {
      this.$refs.videoeEdit.init(e)
    },
    handleDelete(e,row) {
        this.$confirm('是否确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let res = await videoDel({id:row.id})
          if(res.code == 200){
            this.$message.success(res.message)
            this.videoList()
          }else{
            this.$message.warning(res.message)
          }
        }).catch(() => {
              
        });
    }
  },
  async mounted() {

    await  this.categoryVideoTree()

    this.getList()
    // this.categoryVideoTree()
  }
  
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
