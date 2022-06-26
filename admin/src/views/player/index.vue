<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="playerName" label="播放器名称" width="180">
      </el-table-column>
      <el-table-column prop="playerCode" label="播放器编码" width="180">
      </el-table-column>
      <el-table-column prop="playerUrl" label="播放器地址" width="180">
      </el-table-column>
      <el-table-column prop="remarks" label="备注" width="180">
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot="header" slot-scope="scope">
          <el-button @click="add">新增播放器</el-button>
        </template>
        <template slot-scope="scope">
          <div>
            <el-button @click="del(scope.row)">删除</el-button>
            <el-button @click="edit(scope.row)">编辑</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <playerObj ref="playerObj" @shuaxin="playerList"></playerObj>
  </div>
</template>
<script>
import playerObj from "./playerObj";
import { playerList, playerDel, playerEdit } from "@/api/player";
export default {
  components: { playerObj },
  data() {
    return {
      tableData:[],
    }
  },
  mounted(){
    this.playerList()
  },
  methods: {
    async playerList() {
      let res = await playerList()
      this.tableData = res.data
    },
    add() {
      this.$refs.playerObj.add(this.tableData.length)
    },
    edit(e){
      this.$refs.playerObj.edit(e)
    },
    async del(e) {

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await playerDel({id:e.id})
        if(res.code == 200){
          this.playerList()
          this.$message({
            type: 'success',
            message: res.message
          });
        }else{
          this.$message({
            type: 'waning',
            message: res.message
          });
        }
      }).catch(() => {
       
      });
      
    }
  },
}
</script>
<style lang="scss">
  
</style>