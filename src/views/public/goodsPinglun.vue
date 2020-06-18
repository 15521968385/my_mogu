<template>
  <div class="goods_pinglun">
    <nav-bar>
      <template v-slot:c_slot>
        <span>所有评论</span>
      </template>
    </nav-bar>
    <pinglun :data="pinglunsData"></pinglun>
  </div>
</template>
<script>
import { eventBus } from "@/main";
import {request} from "@/request/request";
import navBar from "@/components/public/navbar/navBar"
import pinglun from "@/components/public/goodxiangqing/pinglun"
export default {
  name: "goods_pinglun",
  data() {
    return {
      pinglunsData: [],
    };
  },
  methods:{
    pinglunsDataLoad(){
      request({
        url:`/getgoodpinglun/${this.$route.params.goodId}`
      }).then(res=>{
        console.log(res)
        this.pinglunsData = res
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  components:{
    pinglun,
    navBar
  },
  created(){
    this.pinglunsDataLoad()
  }
  
};
</script>
<style lang="less" scoped>
.goods_pinglun{
  padding-top:44px;
  background-color: white;
  height: 100vh;
}
</style>