<template>
  <!-- 查询条件模块 -->
  <Query></Query>
  <!-- tabs页 -->
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="&nbsp;受邀案件 (10)&nbsp;" name="first">
        <!-- 数据组件 -->
        <lawyer-table :tableHeader="data.headerData" :tableBody="data.bodyData"></lawyer-table>
      </el-tab-pane>
      <el-tab-pane label="&nbsp;匹配案件 (2)&nbsp;" name="second">
        <!-- 数据组件 -->
        <lawyer-table :tableHeader="data.headerData" :tableBody="data.bodyDataOther"></lawyer-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import Query from '../../components/common/Query.vue'
import LawyerTable from './LawyerTable.vue'
export default {
  name: 'Home',
  components: {
    Query,
    LawyerTable
  },
  setup () {
    let activeName = ref('first')
    const data = reactive({
      headerData: ['案由', '原告代理人', '标的额', '所处细分阶段', '管辖法院', '委托目标', '律师费'],
      bodyData: [
        [{name: 'case', value: '合同纠纷'}, {name: 'proxy', value: '张旭超'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '财产纠纷'}, {name: 'proxy', value: '周子钰'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}]
      ],
      bodyDataOther: [
        [{name: 'case', value: '合同纠纷'}, {name: 'proxy', value: '张旭超'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
        [{name: 'case', value: '合同纠纷'}, {name: 'proxy', value: '张旭超'}, {name: 'money', value: 23}, {name: 'step', value: '仲裁'}, {name: 'court', value: '北京市朝阳区人民法院'}, {name: 'result', value: '胜诉'}, {name: 'lawyer', value: 20000}],
      ]
    })
    const tabClick = (event) => {
      console.log(event.index)
    }
    return {
      activeName,
      data,
      tabClick
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabs {
    margin: 0 20px;
  }
</style>
