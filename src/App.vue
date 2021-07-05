<template>
  <Topbar></Topbar>
  <div class="contain">
    <router-view/>
  </div>
</template>
<script>
import Topbar from '@/components/common/Topbar.vue'
export default {
  name: 'App',
  components: {
    Topbar
  }
}
</script>
<style lang="scss" scoped>
  .contain {
    margin: 20px;
    background: #fff;
    height: calc(100vh - 100px);
    overflow: auto;
    padding-bottom: 20px;
  }
</style>