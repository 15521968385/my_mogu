<template>
  <div class="banner">
      
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,i) in data" :key="i" @click="go(item)">
        <a href="#" @click.prevent>
          <img :src="item.banner_img" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "banner",
  methods: {
    
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
.banner {
  background-color: white;
  // 轮播图
  .my-swipe {
    
    .van-swipe-item {
      width: 100%;
      height: 100%;
      text-align: center;
        img {
          width: 80%;
          vertical-align: bottom;
        }
      
    }
  }
}
</style>