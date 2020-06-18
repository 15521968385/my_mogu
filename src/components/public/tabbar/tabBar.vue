<template>
  <div class="tab_bar">
    <div class="tabbar_item" v-for="(item,i) in tabBarData" :key="i" @click="tiaozhuan(item)">
      <div class="tabbar_img">
        <img :src="item.aliveImg" v-if="$route.path==item.path" alt />
        <img :src="item.deathImg" v-else alt />
      </div>
      <div class="tabbar_text" :class="$route.path==item.path?'text-green':''">{{item.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabBarData: [
        {
          path: "/home",
          deathImg: require("@/assets/images/tabbar/1.png"),
          aliveImg: require("@/assets/images/tabbar/11.png"),
          text: "首页"
        },
        {
          path: "/fenlei",
          deathImg: require("@/assets/images/tabbar/2.png"),
          aliveImg: require("@/assets/images/tabbar/22.png"),
          text: "分类"
        },
        {
          path: "/cart",
          deathImg: require("@/assets/images/tabbar/3.png"),
          aliveImg: require("@/assets/images/tabbar/33.png"),
          text: "购物车"
        },
        {
          path: "/my",
          deathImg: require("@/assets/images/tabbar/4.png"),
          aliveImg: require("@/assets/images/tabbar/44.png"),
          text: "我的"
        }
      ]
    };
  },
  methods: {
    tiaozhuan(item) {
      this.$router.replace(item.path);
    }
  }
};
</script>
<style lang="less" scoped>
.tab_bar {
  display: flex;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: -2px 0 2px green;
  padding-top: 2px;
  background-color: white;
  

  .tabbar_item {
    flex: 1;
    text-align: center;
    .tabbar_img {
      img {
        width: 29px;
      }
    }
  }
}
.text-green {
  color: green;
}
</style>