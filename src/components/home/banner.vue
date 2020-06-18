<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,i) in data" :key="i" @click="go(item)">
        <a href="#" @click.prevent>
          <img :src="item.img" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "banner",
  methods: {
    // 点击轮播图跳转
    go(item) {
      this.$router.push(`${this.$route.path}/banneritem/banner${item.id}`);
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
.banner {
  background-color: white;
  // 轮播图
  .my-swipe {
    margin-bottom: 5px;
    .van-swipe-item {
      width: 100%;
      height: 100%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          vertical-align: bottom;
        }
      }
    }
  }
}
</style>