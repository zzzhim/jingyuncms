<template>
    <div>
        <el-dialog title="权限" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="权限">
                        <el-radio-group v-model="form.role">
                            <el-radio label="0">超级管理员</el-radio>
                            <el-radio label="1">普通用户</el-radio>
                            <el-radio label="2">员工</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="quanxian">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { userRole } from '@/api/user';
export default {
  data() {
    return {
        dialogVisible:false,
        form:{
            userId:'',
            role:1
        }
    }
  },
  methods: {
    init(e){
        console.log(e)
          this.form.userId = e.id
          this.form.role = e.role
          console.log(e, this.form)

        this.dialogVisible = true

    },
    handleClose(){
        this.form = {
            userId:'',
            role:1
        }
        this.dialogVisible = false
    },
    async quanxian(){
        let res = await userRole(this.form)
        if(res.code == 200){
            this.$message.success(res.message)
            this.$emit('shuaxin')
            this.handleClose()
        }else{
            this.$message.warning(res.message)
        }
    }
  },
  created() {
   
  }
}
</script>

<style lang="scss" scoped>

</style>
