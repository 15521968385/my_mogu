<template>
  <div class="shop_nav">
    <div class="shopnav1_box">
      <div class="shopnav1_item" v-for="(item) in data" :key="item.id" @click="go(item)">
        <div class="shopnav1_item_img">
          <img v-lazy="item.img" alt />
        </div>
        <div class="shopnav1_item_text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopNav",
  methods:{
    go(item){
      this.$router.push(`${this.$route.path}/huodong/huodong${item.id}`)
    }
  },
  props:{
      data:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>
<style lang="less" scoped>
// 活动分类
.shop_nav {
  padding: 5px;
  background-color: white;
  margin-bottom: 5px;
  .shopnav1_box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .shopnav1_item {
      width: 25%;
      text-align: center;
      margin-bottom: 10px;
      img {
        width: 80%;
        border-radius: 50%;
        vertical-align: bottom;
      }
      .shopnav1_item_text {
        font-size: 13px;
        color: cadetblue;
      }
    }
  }
}
</style>