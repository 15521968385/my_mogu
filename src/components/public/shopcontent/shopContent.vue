<template>
  <div class="shop-content">
    <div
      class="shop-content-item"
      :class="$route.path.indexOf('home')!=-1?'width-50':'width-33'"
      v-for="(item,i) in data"
      :key="i"
      @click="goGoodsXiangqing(item)"
    >
      <div class="goods_img">
        <img :src="item.pic" alt />
      </div>
      <div class="goods_xinxi">
        <div class="goods_name">{{item.name}}</div>
        <div class="goods_price" v-if="$route.path.indexOf('home')!=-1">
          <span class="price">￥{{item.price}}</span>
          <span class="like">
            {{item.love_num}}
            <van-icon
              name="like"
              size="12"
              @click.stop="forLove(item)"
              :class="item.love==1?'love':''"
              :key="i"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { request } from "@/request/request";
export default {
  name: "shopContent",
  methods: {
    // 加入我喜欢并数目加一
    forLove(item) {
      if (item.love == 1) return;
      request({
        url: `/dianxingcolor/${item.id}`,
        params: {
          love: 1,
          love_num: item.love_num + 1
        }
      });
      this.$emit("forLove");
    },
    //
    goGoodsXiangqing(item) {
      this.$router.push(`/home/goodsxiangqing/${item.id}`);
      // console.log(item);
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    data(newval, oldval) {
      console.log(newval);
    }
  }
};
</script>
<style lang="less" scoped>
// 商品展示区域
.shop-content {
  display: flex;
  background-color: white;
  .shop-content-item {
    text-align: center;
    img {
      width: 95%;
      border-radius: 10px;
    }
    .goods_xinxi {
      padding: 0 10px;
      .goods_name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 13px;
        padding: 2px 0;
        text-align: left;
      }
      .goods_price {
        display: flex;
        align-items: center;
        span {
          flex: 1;
        }
        .price {
          text-align: left;
          padding-left: 2px;
          font-size: 16px;
          font-weight: 700;
          color: red;
        }
        .like {
          text-align: right;
          padding-right: 14px;
          position: relative;
          .van-icon {
            position: absolute;
            top: 2px;
            right: 0;
          }
          .love {
            color: red;
          }
        }
      }
    }
  }
  .width-33 {
    width: 33.33%;
  }
  .width-50 {
    width: 50%;
  }
}
</style>