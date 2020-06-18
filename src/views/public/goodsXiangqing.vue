<template>
  <div class="goods_xiangqing">
    <go-back></go-back>
    <go-cart></go-cart>
    <!-- 轮播图 -->
    <banner :data="goodData.banner"></banner>
    <!-- 基本信息 -->
    <basic :data="goodData.basic"></basic>
    <!-- 服务 -->
    <fuwu :data="goodData.fuwu"></fuwu>
    <!-- 选择颜色，尺码 -->
    <xuanze :data="goodData.xuanze"></xuanze>
    <!-- 评论 -->
    <pinglun @click.native="goGoodsPinglun" :data="goodData.pinglun" :xiaoliang="goodData.xiaoliang"></pinglun>
    <!-- 图文详情 -->
    <tuwen :data="goodData.banner" :name="goodData.name"></tuwen>
  </div>
</template>
<script>
import {eventBus} from '@/main'
import { request } from "@/request/request";
import goBack from "@/components/public/goback/goBack";
import goCart from "@/components/public/gocart/goCart";
import banner from "@/components/public/goodxiangqing/banner";
import basic from "@/components/public/goodxiangqing/basic";
import fuwu from "@/components/public/goodxiangqing/fuwu";
import xuanze from "@/components/public/goodxiangqing/xuanze";
import pinglun from "@/components/public/goodxiangqing/pinglun";
import tuwen from "@/components/public/goodxiangqing/tuwen"
export default {
  name: "goodsXiangqing",
  data() {
    return {
      goodData: {
        basic: [],
        banner: [],
        fuwu: [],
        xuanze: {},
        pinglun: [],
        xiaoliang: 0,
        name:''
      }
    };
  },
  methods: {
    goodsDataLoad() {
      request({
        url: `/getgooddata/${this.$route.params.goodId}`
      })
        .then(res => {
          this.goodData.banner = res.goodBanner;
          this.goodData.basic = res.goodData;
          this.goodData.fuwu = res.goodFuwu;
          let xuanze = {
            yanse: res.goodYanse,
            chima: res.goodChima[0].name.split(",")
          };
          this.goodData.xuanze = xuanze;
          this.goodData.pinglun = res.goodPinglun;
          this.goodData.xiaoliang = this.goodData.basic[0].xiao_num;
          this.goodData.name = this.goodData.basic[0].name
          console.log(this.goodData.banner)
        })
        .catch(err => {
          console.log(err);
        });
    },
    goGoodsPinglun(){
      
      this.$router.push(`/home/goodspinglun/${this.$route.params.goodId}`)
    },
    
  },

  components: {
    goBack,
    goCart,
    banner,
    basic,
    fuwu,
    xuanze,
    pinglun,
    tuwen
  },
  created() {
    this.goodsDataLoad();
    
  }
};
</script>
<style lang="less" scoped>
</style>