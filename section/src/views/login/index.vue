<template>
  <div class="login">
    <div class="form">
      <div class="logo">
        <img class="icon" :src="require('../../../public/logo.png')" />
      </div>
      <el-form ref="form" :model="form">
        <el-form-item label="账号">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button
            type="primary"
            @click="login"
            style="display: block; margin: auto"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from "electron"

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      ipcRenderer.invoke("login", {
        ...this.form
      }).then((res) => {
        if (res.code === 200) {
          this.$router.push("/")
          localStorage.setItem('token', res.data.token)
        } else {
          this.$message.warning(res.message);
        }
      })
    },
  },
}
</script>
<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .form {
    border-radius: 20px;
    padding: 20px;
    margin: 100px;
    background: rgba(255, 255, 255, 0.1);
    width: 400px;
    height: 400px;
    box-shadow: 0 0px 20px rgb(158, 163, 167);

    .logo {
      width: 100px;
      height: 100px;
      margin: 20px auto;
      text-align: center;

      .icon {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>