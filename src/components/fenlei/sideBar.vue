<template>
  <div class="side_bar">
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item v-for="(item,i) in data" :key="i" :title="item.text" />
      
    </van-sidebar>
    
  </div>
</template>
<script>
export default {
  name: "sideBar",
  props:{
      data:{
          type:Array,
          default(){
              return [
                
              ]
          }
      }
  },
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(index) {
      this.activeKey=index;
      
      this.$emit('onChange',this.activeKey)
    }
  }
};
</script>
<style lang="less" scoped>
.side_bar {
  .van-sidebar-item {
    padding: 10px 13px;
  }
}
</style>