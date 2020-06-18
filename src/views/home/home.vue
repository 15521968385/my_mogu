<template>
  <div class="home">
    <!-- 顶部navBar -->
    <nav-bar>
      <!-- 一定要用template标签，代替中间的插槽 -->
      <template v-slot:l_slot>
        <van-icon name="contact" size="20" />
      </template>
      <template v-slot:c_slot>
        <van-search shape="round" background="#ccc" placeholder="请输入搜索关键词" />
      </template>
      <template v-slot:r_slot>
        <van-icon name="scan" size="20" />
      </template>
    </nav-bar>
    <!-- 轮播banner -->
    <banner :data="homeData.bannerData"></banner>
    <!-- 活动导航 -->
    <shop-nav :data="homeData.huodongClassData"></shop-nav>
    <!-- 商品展示头部控制器 -->
    <shop-controller :data="homeData.headControllerData" @changController="changController"></shop-controller>
    <!-- 商品展示区域 -->
    <shop-content :data="homeData.shopContentData" @forLove="forLove"></shop-content>
  </div>
</template>
<script>
import { request } from "@/request/request";
import navBar from "@/components/public/navbar/navBar";
import banner from "@/components/home/banner";
import shopNav from "@/components/home/shopNav";
import shopController from "@/components/home/shopController";
import shopContent from "@/components/public/shopcontent/shopContent";
export default {
  name: "home",
  data() {
    return {
      homeData: {
        // 轮播图数据
        bannerData: [],
        // 商品分类导航数据
        huodongClassData: [],
        // 商品头部控制器数据
        headControllerData: [],
        // 商品展示区域数据
        shopContentData: []
      },
      shopControllerCur: 0
    };
  },
  methods: {
    homeDataLoad() {
      request({
        url: "/gethomedata"
      })
        .then(res => {
          this.homeData.bannerData = res.bannerData;
          this.homeData.huodongClassData = res.huodongClassTitle;
          this.homeData.headControllerData = res.classTitle;
          if (this.shopControllerCur == 0) {
            this.homeData.shopContentData = res.classOneData;
          } else if (this.shopControllerCur == 1) {
            this.homeData.shopContentData = res.classTwoData;
          } else if (this.shopControllerCur == 2) {
            this.homeData.shopContentData = res.classTreeData;
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    changController(shopControllerCur) {
      this.shopControllerCur = shopControllerCur;
      this.homeDataLoad()
    },
    forLove(){
      this.homeDataLoad();
    }
  },
  components: {
    navBar,
    banner,
    shopNav,
    shopController,
    shopContent
  },
  created() {
    this.homeDataLoad()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  padding: 44px 0 49px 0;
}
</style>