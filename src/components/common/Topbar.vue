<template>
  <div class="topbar">
    <div class="topbarImg">
      <img :src="require('../../assets/images/logo.jpg')" style="width: 50px;"/>
    </div>
    <div class="topbarText">
      帮瀛律师匹配平台
    </div>
    <div class="topbarNotice">通知</div>
    <div class="topbarUser" @click="gotoEditUserinfo">用户</div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const gotoEditUserinfo = () => {
      router.push({name: 'editUserinfo'})
    }
    return {
      gotoEditUserinfo
    }
  }
}
</script>
<style lang="scss" scoped>
  .topbar {
    background: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    .topbarText {
      font-size: 28px;
      color: #1c447a;
      font-weight: 500;
      margin-left: 10px;
      flex: 1;
    }
    .topbarNotice {
      margin-right: 20px;
    }
  }
</style>