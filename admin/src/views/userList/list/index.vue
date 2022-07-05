<template>
  <div class="dashboard-container">

    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="用户名称">
        <el-input v-model="form.username" @change="sousuo" placeholder="用户名称"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="form.role" @change="sousuo" placeholder="角色">
          <el-option :label="item.name" v-for="item in  tableData" :key="item.id" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-table :data="list" height="calc(100vh - 270px)" style="width: 100%">
      <el-table-column type="index" label="序号">
      </el-table-column>
      <el-table-column prop="avatar" label="用户头像">
        <template slot-scope="scope">
          <!-- {{scope.row.avatar}} -->
          <img :src="scope.row.avatar" style="width:80px" alt="" srcset="">
          <!-- <el-image
            :scr="scope.row.avatar"
            :preview-src-list="[scope.row.avatar]"
          /> -->
        </template>
      </el-table-column>
      <el-table-column prop="username" label="用户名称 ">
      </el-table-column>
      <el-table-column prop="role" label="权限">
        <template slot-scope="scope">
          <span v-if="scope.row.role == '0'">超级管理员</span>
          <span v-if="scope.row.role == '1'">普通用户</span>
          <span v-if="scope.row.role == '2'">管理员</span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱">

      </el-table-column>
      <el-table-column prop="createdAt" label="创建时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" @click="quanxian(scope.row)">权限</el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <Pagination style="text-align:center" :pageSize="form.pageSize" :page="form.pageNo" :total="total"
      @pagination="pagination"></Pagination>
    <permission ref="permission" @shuaxin="userList"></permission>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userList } from '../../../api/user'
import Pagination from '@/components/Pagination';
import permission from "../permission/index";
export default {
  components:{
    Pagination,permission
  },
  data() {
    return {
      list: [],
      total: 0,
      form:{
        pageSize:10,
        pageNo:1,
        role:'',
        username:''
      },
      tableData:[
        {
          name:'超级管理员',id:'0',
          name:'普通用户',id:'1',
          name:'管理员',id:'2',
        }
      ],
      total:0,
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    sousuo(){
      this.form.pageNo = 1
      this.userList()

    },
    quanxian(e){
      this.$refs.permission.init(e)
    },
    pagination(e){
      this.form.pageSize = e.limit
      this.form.pageNo = e.page
      this.userList()
    },
    getList() {
      this.userList()
    },
    async userList() {
      const res = await userList(this.form)

      if(res.code === 200) {
        this.list = res.data.list
        this.total = res.data.total
      }
    },
    handleEdit() {

    },
    handleDelete() {

    }
  },
  created() {
    this.getList()
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
