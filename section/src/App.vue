<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss">

</style>
