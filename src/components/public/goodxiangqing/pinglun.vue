<template>
  <div class="pinglun">
    <div class="ping_num" v-if="$route.path.indexOf('goodsxiangqing')!=-1">
      <div class="content">
        <span>销量{{xiaoliang}}</span>
        |
        <span>买家评价{{data.length}}</span>
      </div>
      <van-icon name="arrow" size="18" />
    </div>
    <div class="content" v-for="(item,i) in pinglunData" :key="i" :class="$route.path.indexOf('goodspinglun')!=-1?'borderb-eee':''">
      <div class="head">
        <div class="user_img">
          <img :src="item.user_img" alt />
        </div>
        <span class="user_name">{{item.user_name}}</span>
      </div>
      <div class="contents">
        <p>{{item.content}}</p>
        <div class="img">
          <img :src="item.img" alt />
        </div>
      </div>

      <div class="footer">
        <span class="time">{{item.time}}</span>
        <span class="kuanshi">款式:{{item.good}}</span>
        <span class="dianzan">
          {{item.zan}}
          <van-icon name="good-job" size="14px" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main";
export default {
  name: "pinglun",
  data() {
    return {
      pinglunData: []
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    xiaoliang: {
      type: Number
    }
  },
  watch: {
    data(newVal, oldVal) {
      let pinglunData;
      if (this.$route.path.indexOf("goodsxiangqing") != -1) {
        pinglunData = [newVal[0]];
      } else if (this.$route.path.indexOf("goodspinglun") != -1) {
        pinglunData = newVal;
      }
      // console.log(pinglunTwo);
      this.pinglunData = pinglunData;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.pinglun {
  background-color: white;
  padding: 5px 0;
  margin-bottom: 5px;
  .ping_num {
    display: flex;
    align-items: center;
    padding-left: 10px;
    .content {
      color: gray;
      font-size: 12px;
      flex: 19;
    }
    .van-icon {
      flex: 1;
    }
  }
  > .content {
    padding: 5px 10px 0 10px;
    .head {
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      .user_img {
        padding-right: 8px;
        img {
          width: 30px;
          border-radius: 50%;
          vertical-align: bottom;
        }
      }
    }
    .contents {
      p {
        color: #727272;
        font-size: 13px;
        padding-bottom: 5px;
      }
      .img {
        img {
          width: 33.33%;
          vertical-align: bottom;
        }
      }
    }
    .footer {
      color: #999;
      font-size: 12px;
      span {
        display: inline-block;
        padding-right: 10px;
      }
      .dianzan {
        float: right;
      }
    }
  }
  .borderb-eee{
    border-bottom: 1px solid #ccc;
  }
}
</style>