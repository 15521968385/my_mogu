<template>
  <div class="goback">
    <van-button icon="arrow-left" type="default" round @click="goback()" />
  </div>
</template>
<script>
export default {
  name: "goBack",
  methods: {
    // 返回上一步
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.van-button--default{
    background-color: rgba(0,0,0,.2);
}
.goback{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>