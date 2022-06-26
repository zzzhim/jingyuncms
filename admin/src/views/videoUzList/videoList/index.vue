<template>
  <div style="padding:20px">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="文件名称">
        <el-input v-model="form.fileName" @change="sousuo" placeholder="文件名称"></el-input>
      </el-form-item>
      <el-form-item label="视频名称">
        <el-input v-model="form.vodName" @change="sousuo" placeholder="视频名称"></el-input>
      </el-form-item>
      <el-form-item label="豆瓣ID">
        <el-input v-model="form.doubanId" @change="sousuo" placeholder="视频名称"></el-input>
      </el-form-item>
    </el-form>

    <el-table :data="table" height="calc(100vh - 270px)" style="width: 100%">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="doubanId" label="豆瓣ID">
      </el-table-column>
      <el-table-column prop="vodName" label="视频名称">
      </el-table-column>
      <el-table-column prop="fileName" label="文件名称">
      </el-table-column>
      <el-table-column prop="remarks" label="备注">
      </el-table-column>
      <el-table-column prop="createdAt" label="创建时间">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete( scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination style="text-align:center" :pageSize="form.pageSize" :page="form.pageNo" :total="total"
      @pagination="pagination"></Pagination>


    <edit ref="edit" @shuaxin="videoList"></edit>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination';
import edit from "./edit";
import { videoList, videpDel } from '@/api/videoUzList';
export default {
    components: {
      Pagination,edit
    },
    data() {
      return {
        form:{
          fileName:'',
          vodName:'',
          doubanId:'',
          pageNo:1,
          pageSize:10,
        },
        total:0,
        table:[],
      }
    },
    mounted() {
      this.videoList()
    },
    methods: {
      handleEdit(e){
        this.$refs.edit.init(e)
      },
      async handleDelete(val){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let res = await videpDel({ id: val.id })
          if(res.code == 200){
            this.videoList()

            this.$message({
              type: 'success',
              message:res.message
            });
          }else{
            this.$message({
              type: 'warning',
              message: res.message
            });
          }
          
        }).catch(() => {
         
        });
       
      },
      sousuo(){
        this.form.pageNo = 1
        this.videoList()
      },
      pagination(e) {
        this.form.pageSize = e.limit
        this.form.pageNo = e.page
        this.videoList()
      },
      async videoList(){
        let res = await videoList(this.form)
        this.table = res.data.list
        this.total = res.data.total
      }
    },
}
</script>
<style lang="scss">
  
</style>