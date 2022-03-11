<template>
  <div class="dashboard-container">
    <div ref="lottie" class="lottie"></div>
    <p class="tips">正在开发中...</p>
  </div>
</template>

<script>
import lottie from "lottie-web"
export default {
  components: {},
  data() {
    return {
      anim: null,
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  created() {
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/lottie_1.json' // the path to the animation json
    });
  },
  destroyed() {
    this.anim && this.anim.destroy()
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;

    .lottie {
      width: 50%;
      margin: 0px auto;
    }

    .tips {
      text-align: center;
      font-size: 32px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
