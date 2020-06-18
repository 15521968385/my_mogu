<template>
  <keep-alive>
    <div class="fenlei">
      <nav-bar class="nav_bar">
        <template v-slot:l_slot>
          <van-icon name="service-o" size="20" />
        </template>
        <template v-slot:c_slot>
          <van-search class="search" placeholder="请输入搜索关键词" input-align="center" />
        </template>
        <template v-slot:r_slot>
          <van-icon name="cart-o" size="20" />
        </template>
      </nav-bar>
      <keep-alive>
      <div class="side-bar">
        <side-bar :data="fenleiData.left" @onChange="onChange"></side-bar>
        <shop-content :data="fenleiData.data"></shop-content>
      </div>
      </keep-alive>
    </div>
  </keep-alive>
</template>
<script>
import { request } from "@/request/request";
import navBar from "@/components/public/navbar/navBar";
import sideBar from "@/components/fenlei/sideBar";
import shopContent from "@/components/public/shopcontent/shopContent";
export default {
  name: "fenLei",
  data() {
    return {
      fenleiData: {
        data: [],
        left: [],
        curItem: 0
      }
    };
  },
  methods: {
    fenleiDataLoad() {
      request({
        url: "/gethuodongdata"
      })
        .then(res => {
          // console.log(res);

          this.fenleiData.left = res.huodongTitle;
          if (this.fenleiData.curItem == 0) {
            this.fenleiData.data = res.huodongOne;
          } else if (this.fenleiData.curItem == 1) {
            this.fenleiData.data = res.huodongTwo;
          } else if (this.fenleiData.curItem == 2) {
            this.fenleiData.data = res.huodongThree;
          } else if (this.fenleiData.curItem == 3) {
            this.fenleiData.data = res.huodongFour;
          } else if (this.fenleiData.curItem == 4) {
            this.fenleiData.data = res.huodongFive;
          } else if (this.fenleiData.curItem == 5) {
            this.fenleiData.data = res.huodongSix;
          } else if (this.fenleiData.curItem == 6) {
            this.fenleiData.data = res.huodongSeven;
          } else if (this.fenleiData.curItem == 7) {
            this.fenleiData.data = res.huodongEight;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChange(curItem) {
      console.log(curItem)
      this.fenleiData.curItem = curItem;
      this.fenleiDataLoad();
    }
  },
  components: {
    navBar,
    sideBar,
    shopContent
  },
  created() {
    this.fenleiDataLoad();
  }
};
</script>
<style lang="less" scoped>
.fenlei {
  padding-top: 44px;
  height: 100vh;
  background-color: white;
  .nav_bar {
    background-color: white;
  }
  .side-bar {
    display: flex;
  }
}
</style>