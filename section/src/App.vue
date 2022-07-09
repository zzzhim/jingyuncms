<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { ipcRenderer } from "electron"

export default {
  mounted() {
    ipcRenderer.invoke("getToken").then((token) => {
      if (!token.length) {
        this.$router.push("/login")
      }
    })
  },
}
</script>
<style lang="scss">

</style>
