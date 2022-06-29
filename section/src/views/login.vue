<template>
    <div class="login">
        <div class="form">
            <div class="logo">
                logo
            </div>
            <el-form ref="form" :model="form">
                <el-form-item label="账号">
                    <el-input v-model="form.passName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.passWrod"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" style="display:block;margin:auto">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{
                passName: '',
                passWrod: '',
            }
        }
    },
}
</script>
<style lang="scss">



















    .login{
        display: flex;
        background: #000;
        justify-content: center;
        height: 100vh;
        color:rgb(12, 152, 233);
        .logo{
            text-align: center;
            line-height: 100px;
            height: 100px;
            width: 100px;
            font-size: 30px;
            font-weight: 600;
            background: rgba(3, 158, 248,.8);
            border-radius: 20px;
            color: #fff;
            margin:20px auto 30px;
        }
        .el-form-item__label{
            color: #fff;
        }
        .el-input__inner{
            color: #fff;
            border-color:rgba(3, 158, 248, .6) ;
            background: rgba(255, 255, 255, .01);
        }
        .el-input__inner:hover{
            border-color:rgba(3, 158, 248, .8) ;
        }
        .form{
            border-radius: 20px;
            padding:20px;
            margin: 100px;
            border: 1px solid rgba(3, 158, 248, .8);
            background: rgba(255,255,255,.1);
            width: 400px;
            height: 400px;
            box-shadow: 0 0px 20px rgb(12, 152, 233);
        }
    }
</style>