<!-- 筛选条件 -->
<template>
  <div class="containPadding">
    <div class="titleColor">筛选</div>
    <div class="row">
      <Cause :initWidth="60"></Cause>
      <Stag :initWidth="100"></Stag>
    </div>
    <div class="row">
      <Place :initWidth="60"></Place>
      <Commission :initWidth="100"></Commission>
    </div>
  </div>
</template>

<script>
import Cause from './Cause.vue'
import Commission from './Commission.vue'
import Place from './Place.vue'
import Stag from './Stag.vue'
export default {
  components: {
    Cause,
    Commission,
    Place,
    Stag
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    align-items: center;
  }
</style>