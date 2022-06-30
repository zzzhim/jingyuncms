<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import { getStore } from "./electron/utils/store";
export default {
  mounted() {
    // console.log(getStore('token'),'token')
    
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss">

</style>
