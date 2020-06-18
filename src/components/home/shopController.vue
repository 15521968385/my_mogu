<template>
  <div class="shop-controller">
    <div
      v-for="(item,i) in data"
      :key="i"
      :class="headControllerCur==i?'borderb-red':''"
      @click="changController(i)"
    >{{item.class_name}}</div>

  </div>
</template>
<script>
export default {
  name: "shopController",
  data() {
    return {
      // 选中的头部控制器item项
      headControllerCur: 0
    };
  },
  methods:{
    changController(i){
      this.headControllerCur=i
      this.$emit('changController',this.headControllerCur)
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
// 商品控制器头部
.shop-controller {
  position: sticky;
  top: 44px;
  z-index: 1;
  display: flex;
  background-color: white;
  div {
    flex: 1;
    text-align: center;
    padding: 5px;
  }
  .borderb-red {
    border-bottom: 3px solid red;
  }
}
</style>