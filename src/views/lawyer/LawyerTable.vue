<template>
  <div class="lawyerTable">
    <table>
      <tr class="tableHeader">
        <th>选择</th>
        <th>编号</th>
        <th v-for="(item, index) in data.tableHeader" :key="index">{{item}}</th>
      </tr>
      <tr class="tableBody" v-for="(item, index) in data.tableBody" :key="index">
        <td><el-checkbox label=""></el-checkbox></td>
        <td>{{index + 1}}</td>
        <td v-for="(val, i) in item" :key="i">{{val.value}}</td>
      </tr>
    </table>
  </div>
  <!-- 分页组件 -->
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="data.tableBody.length">
    </el-pagination>
  </div>
</template>
<script>
import { onMounted, reactive, watch } from 'vue'
export default {
  // 表格头信息"数组"、表格内容数据
  props: ['tableHeader', 'tableBody'],
  setup (props, { context }) {
    let data = reactive({
      tableHeader: [],
      tableBody: []
    })
    // 首次加载给表格赋值
    onMounted (() => {
      data.tableHeader = props.tableHeader
      data.tableBody = props.tableBody
    })
    // 监听表格数据变化，刷新表格数据。
    watch([() => props.tableHeader, () => props.tableBody], ([newHeader, newBody], [oldHeader, oldBody]) => {
      if (newHeader !== oldHeader) {
        data.tableHeader = newHeader
      }
      if (newBody !== oldBody) {
        data.tableBody = newBody
      }
    })
    return {
      data
    }
  }
}
</script>
<style lang="scss" scoped>
  .lawyerTable {
    width: 100%;
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      tr {
        height: 50px;
        line-height: 50px;
        th, td {
          padding: 0;
          text-align: center;
        }
        th {
          border: 1px solid #f4f4f4;
        }
      }
      .tableHeader {
        background: #fafafa;
      }
    }
  }
</style>