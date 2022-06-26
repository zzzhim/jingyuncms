<template>
  <div>
    <el-dialog title="播放器" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
      <div>
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="播放器编码">
            <el-input v-model="form.playerCode"></el-input>
          </el-form-item>
          <el-form-item label="播放器名称">
            <el-input v-model="form.playerName"></el-input>
          </el-form-item>
          <el-form-item label="播放器url">
            <el-input v-model="form.playerUrl"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remarks"></el-input>
          </el-form-item>
          <el-form-item label="排序">
            <el-input v-model="form.sort"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="playerAdd()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

import { playerAdd, playerEdit } from "@/api/player";
export default {
  data() {
    return {
      dialogVisible:false,
      form:{
        sort:0,
        playerCode:'',
        playerName:'',
        playerUrl:'',
        remarks:'',
      }
    }
  },
  methods: {
    handleClose(){
      this.form={
        sort: 0,
        playerCode: '',
        playerName: '',
        playerUrl: '',
        remarks: '',
      }
      this.dialogVisible = false
    },
    edit(e){
      this.form = {
        sort: e.sort,
        id:e.id,
        playerCode: e.playerCode,
        playerName: e.playerName,
        playerUrl:e.playerUrl,
        remarks: e.remarks,
      }
      this.dialogVisible = true

    },
    add(num){
      this.form.sort = num+1
      this.dialogVisible = true
    },
    async playerAdd(){

      if(this.form.id){
        let res = await playerEdit(this.form)
        if (res.code == 200) {
          this.$emit('shuaxin')
          this.handleClose()
          this.$message.success(res.message)
        } else {
          this.$message.waning(res.message)
        }
      }else{
        let res = await playerAdd(this.form)
        if (res.code == 200) {
          this.$emit('shuaxin')
          this.handleClose()
          this.$message.success(res.message)
        } else {
          this.$message.waning(res.message)
        }
      }
      
    }
  },
}
</script>
<style lang="scss">
  
</style>