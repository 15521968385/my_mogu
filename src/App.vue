<template>
  <div id="app">
    
    <router-view></router-view>
    
    <tab-bar v-if="$route.path=='/home'||$route.path=='/fenlei'||$route.path=='/cart'||$route.path=='/my'"></tab-bar>
  </div>
</template>
<script>
import tabBar from '@/components/public/tabbar/tabBar'
export default {
  name:'app',
  components:{
    tabBar
  }
}
</script>

<style lang="less" scoped>

</style>
