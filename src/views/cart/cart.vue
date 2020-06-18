<template>
    <div class="cart">
        <go-login v-if="token==null"></go-login>
    </div>
</template>
<script>
import goLogin from "@/components/public/gologin/goLogin"
export default {
    name:'cart',
    data(){
        return{
            token:window.sessionStorage.getItem("token")
        }
    },
    components:{
        goLogin
    }

}
</script>
<style lang="less" scoped>

</style>