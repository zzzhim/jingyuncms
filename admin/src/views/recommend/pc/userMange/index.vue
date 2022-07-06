<template>
    <div class="">
        <el-form :model="formInline" class="demo-form-inline">
            <el-form-item label="用户名称">
                <el-input v-model="formInline.username" placeholder="用户名称"></el-input>
            </el-form-item>
            <el-form-item label="旧密码">
                <el-input v-model="formInline.oldPassword" placeholder="旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="formInline.newPassword" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="display:block;margin:auto" @click="accountAndPass">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { accountAndPass } from '@/api/user';
export default {
    data() {
        return {
            formInline:{
                username: '',
                oldPassword: '',
                newPassword: '',
            }
        }
    },
    methods: {
        async accountAndPass(){
            let res = await accountAndPass(this.formInline)
            if(res.code == 200){
                this.$message.success(res.message)
            }else{
                this.$message.warning(res.message)
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .demo-form-inline{
        width:600px;
        background: #fff;
        padding:20px;
        margin: 20px auto;
    }
</style>