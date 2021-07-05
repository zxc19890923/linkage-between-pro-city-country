<template>
  <div class="flexRow">
    <div class="rowLabel" :style="{width: initWidth ? initWidth + 'px' : 'auto'}">
      委托状态
    </div>
    <div class="rowValue">
      <el-select v-model="cause" placeholder="请选择" style="width: 300px;">
        <el-option v-for="(item, index) in causeData" :key="index" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'
export default {
  props: ['initWidth'],
  setup (props, {context}) {
    let initWidth = ref(0)
    let cause = ref(0)
    const causeData = reactive([
      {label: '合同纠纷', value: 0}
    ])
    onMounted(() => {
      console.log(props.initWidth)
      if (props.initWidth) {
        initWidth.value = props.initWidth
      }
    })
    return {
      cause,
      causeData,
      initWidth
    }
  }
}
</script>

<style lang="scss" scoped>

</style>