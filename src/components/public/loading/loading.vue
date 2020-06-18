<template>
  <div class="loading">
    <van-loading type="spinner" color="#1989fa" />
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
<style lang="less" scoped>
.loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>