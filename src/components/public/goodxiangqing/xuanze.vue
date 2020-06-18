<template>
  <div class="xuanze">
    <div class="xuanze_controller" @click="showPopup">
      <div>请选择：颜色、尺码</div>
      <van-icon name="arrow" />
    </div>
    <van-popup v-model="show" position="bottom" closeable>
      <div class="head_box">
        <img v-lazy="headData.pic" alt />
        <div class="price">￥{{headData.price}}</div>
        <div class="kucun">库存：{{headData.kucun}}件</div>
        <span>请选择：颜色、尺码</span>
      </div>
      <div class="yeshe">
        <div class="title">颜色</div>
        <span
          v-for="(item,i) in data.yanse"
          :key="i"
          @click="changYanse(item)"
          :class="item.id==yanse.curItem?'border-red':''"
        >{{item.name}}</span>
      </div>
      <div class="chima">
        <div class="title">尺码</div>
        <span
          v-for="(item,i) in data.chima"
          :key="i"
          :class="i==chima.curItem?'border-red':''"
          @click="changChima(i)"
          style="padding:0 7px"
        >{{item}}</span>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "xuanze",
  data() {
    return {
      show: false,
      headData: {},
      yanse: {
        curItem: null
      },
      chima: {
        curItem: null
      }
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    changYanse(item) {
      this.headData = item;
      this.yanse.curItem = item.id;
      //   console.log(this.headData);
    },
    changChima(i) {
      this.chima.curItem = i;
    }
  },
  //   watch能拿到props里面的值
  watch: {
    data(newVal, oldVal) {
      this.headData=newVal.yanse[0]
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.xuanze {
  background-color: white;
  padding: 10px 0;
  margin-bottom: 5px;
  .xuanze_controller {
    display: flex;
    align-items: center;
    div {
      flex: 19;
      padding-left: 10px;
    }
    .van-icon {
      flex: 1;
      font-size: 18px;
    }
  }
  .van-popup {
    height: 50%;
    overflow: visible;
    .head_box {
      padding-left: 30%;
      position: relative;
      font-size: 13px;
      color: #333;
      img {
        width: 20%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        transform: translateX(25%);
      }
      .price {
        color: black;
        padding-top: 10px;
        font-size: 24px;
      }
    }
    .yeshe,
    .chima {
      padding: 10px;
      .title {
        border-bottom: 1px #ccc solid;
      }
      span {
        display: inline-block;
        border: 1px #ccc solid;
        margin: 5px;
        padding: 2px 0;
      }
      .border-red {
        border: 1px solid red;
      }
    }
  }
}
</style>