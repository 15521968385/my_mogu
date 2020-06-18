<template>
  <div class="navbar">
    <div class="l_box">
      <slot name="l_slot" >
        <!-- 默认插入 -->
        <van-icon name="arrow-left" size="20" @click="goBack" />
      </slot>
    </div>

    <div class="c_box">
      <slot name="c_slot"></slot>
    </div>
    <div class="r_box">
      <slot name="r_slot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  methods:{
    // 返回上一步
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.navbar {
  height: 44px;
  background-color: #ccc;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  .c_box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-search {
      width: 100%;
      height: 100%;
    }
  }
  .r_box,
  .l_box {
    width: 44px;
    height: 100%;
    // background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>