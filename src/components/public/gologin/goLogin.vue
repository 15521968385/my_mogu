<template>
    <div class="go_login">
        <van-button round  block color="linear-gradient(to right, #4bb0ff, #6149f6)">请先登录</van-button>
    </div>
</template>
<script>
export default {
    name:'go_login'
}
</script>
<style lang="less" scoped>
.go_login{
    height: 100vh;
    background-color: white;
    padding:0 20px;
    .van-button{
        position: relative;
        top: 30%;
    }
}
</style>