<template>
  <div class="gocart">
    <van-button icon="cart-o" type="default" round @click="gocart()" />
  </div>
</template>
<script>
export default {
  name: "goCart",
  methods: {
    gocart() {
      this.$router.replace('/cart');
    }
  }
};
</script>
<style lang="less" scoped>
.van-button--default{
    background-color: rgba(0,0,0,.2);
}
.gocart{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
}
</style>