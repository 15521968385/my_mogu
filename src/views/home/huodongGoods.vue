<template>
  <div class="huodong_goods" >
    <nav-bar></nav-bar>
    <van-tabs v-model="titleCur" @click="changTitle" sticky offset-top="44">
      <van-tab v-for="(item,i) in huodongData.title" :key="i" :title="item.text">
        <shop-content :data="huodongData.content" @forLove="forLove"></shop-content>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { request } from "@/request/request";
import navBar from "@/components/public/navbar/navBar"
import shopContent from "@/components/public/shopcontent/shopContent";
export default {
  name: "huodongGoods",
  data() {
    return {
      huodongData: {
        title: [],
        content: []
      },
      titleCur: 0
    };
  },
  methods: {
    titleCurLoad() {
      let titleCur = this.$route.params.param.substr(
        this.$route.params.param.length - 1,
        1
      );
      this.titleCur = titleCur - 1;
      // console.log(this.titleCur);
    },
    huodongDataLoad() {
      request({
        url: "/gethuodongdata"
      })
        .then(res => {
          // console.log(res);
          this.huodongData.title = res.huodongTitle;
          if (this.titleCur == 0) {
            this.huodongData.content = res.huodongOne;
          } else if (this.titleCur == 1) {
            this.huodongData.content = res.huodongTwo;
          } else if (this.titleCur == 2) {
            this.huodongData.content = res.huodongThree;
          } else if (this.titleCur == 3) {
            this.huodongData.content = res.huodongFour;
          } else if (this.titleCur == 4) {
            this.huodongData.content = res.huodongFive;
          } else if (this.titleCur == 5) {
            this.huodongData.content = res.huodongSix;
          } else if (this.titleCur == 6) {
            this.huodongData.content = res.huodongSeven;
          } else if (this.titleCur == 7) {
            this.huodongData.content = res.huodongEight;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    changTitle(name) {
      this.$router.replace(`/home/huodong/huodong${name+1}`)
      this.titleCur = name;
      this.huodongDataLoad();
    },
    forLove(){
      this.huodongDataLoad();
    }
  },

  components: {
    shopContent,
    navBar
  },
  created() {
    this.huodongDataLoad();
    this.titleCurLoad();
  }
};
</script>
<style lang="less" scoped>
.huodong_goods{
  padding-top: 44px;
}

</style>