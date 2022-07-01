<template>
  <el-container class="home">
    <LeftPage />

    <MainPage />

    <RightPage />
  </el-container>
</template>

<script>
import LeftPage from "./leftPage.vue"
import MainPage from "./mainPage.vue"
import RightPage from "./rightPage.vue"

export default {
  name: 'HomeView',
  components: {
    LeftPage,
    MainPage,
    RightPage
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {}
}
</script>

<style lang="scss">
  .el-scrollbar__wrap {
    // width: 100%;
    overflow: auto;
  }
</style>

<style lang="scss" scoped>
  .home {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
  }
</style>
