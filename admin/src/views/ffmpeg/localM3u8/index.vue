<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getLocalVideoList } from '../../../api/ffmpeg'

export default {
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    getList() {
      this.getLocalVideoList()
    },
    async getLocalVideoList(params = {}) {
      const res = await getLocalVideoList(params)

      console.log(res)
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
