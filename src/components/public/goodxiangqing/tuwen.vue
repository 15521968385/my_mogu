<template>
    <div class="tuwen">
        <p class="title">图文详情</p>
        <span class="name">{{name}}</span>
        <div class="img" v-for="(item,i) in data" :key="i">
            <img v-lazy="item.banner_img" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:'tuwen',
    props:{
        data:{
            type:Array,
            default(){
                return[]
            }
        },
        name:{
            type:String
        }
    },
}
</script>
<style lang="less" scoped>
.tuwen{
    background-color: white;
    padding: 10px;
    text-align: center;
    .title{
        border-bottom: 1px solid #ccc;
    }
    .name{
        font-size: 12px;
        color: gray;
    }
    .img{
        img{
            width: 100%;
        }
    }
}
</style>