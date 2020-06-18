<template>
  <div class="fuwu">
    <div class="fuwu_controller" @click="showPopup">
      <div class="content">
        <div v-for="(item,i) in data" :key="i">
          <van-icon name="fire" size="12" color="#f00" />
          {{item.fuwu_title}}
        </div>
      </div>
      <van-icon name="arrow" />
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="popup_title">服务说明</div>
      <div v-for="(item,i) in data" :key="i">
        <div class="fuwu_title">
          <van-icon name="fire" size="12" color="#f00" />
          {{item.fuwu_title}}
        </div>
        <div class="fuwu_content">{{item.fuwu_content}}</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "fuwu",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.fuwu {
  background-color: white;
  padding:10px 0;
  margin-bottom: 5px;
  .fuwu_controller {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    .content {
      flex: 19;
      display: flex;
      flex-wrap: wrap;
      padding-left: 10px;
      div {
        width: 33.33%;
      }
    }
    .van-icon {
      flex: 1;
      font-size: 18px;
    }
  }
  .van-popup {
    padding: 0 10px;
    height: 50%;
    .popup_title {
      text-align: center;
      padding: 10px;
      color: gray;
      font-size: 18px;
    }
    .fuwu_content {
      padding: 5px 0 15px 0;
      font-size: 12px;
      color: gray;
    }
  }
}
</style>