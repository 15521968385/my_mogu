<template>
  <div class="banneritem">
      <go-back></go-back>
      <div v-for="(item,i) in bannerItemData" :key="i">
          <img v-lazy="item.url" alt="">
      </div>
  </div>
</template>
<script>
import { request } from "@/request/request";
import goBack from '@/components/public/goback/goBack'
export default {
  name: "bannerItem",
  data(){
      return{
          bannerItemData:[]
      }
  },
  components:{
      goBack
  },
  created() {
    let id = this.$route.params.param.substr(
      this.$route.params.param.length - 1,
      1
    );
    request({
      url: `/getbanneritem/${id}`
    })
      .then(res => {
          this.bannerItemData=res
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="less" scoped>
.banneritem{
    img{
        width: 100%;
        vertical-align: bottom;
    }
}
</style>