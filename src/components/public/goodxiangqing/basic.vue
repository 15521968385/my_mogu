<template>
  <div class="basic">
    <div class="basic_box" v-if="data[0]">
      <div class="top">
        <span class="price">￥{{data[0].price}}</span>
        <div class="right">
          <span class="history_price">￥{{data[0].history_price}}</span>
          <span class="youhui">{{data[0].huodong}}</span>
        </div>
      </div>
      <div class="good_name">{{data[0].name}}</div>
      <div class="youfei">
        <div v-if="data[0].youfei==0">免邮费</div>
        <div v-else>邮费：{{data[0].youfei}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main";
export default {
  name: "basic",
  data() {
    return {
      xiaoliang: 0
    };
  },
  methods: {
    
  },

  //   watch能拿到props里面的值
  watch: {
    
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
   
  },
  destroy() {}
};
</script>
<style lang="less" scoped>
.basic {
  padding: 0 10px;
  background-color: white;
  margin-bottom: 5px;
  .basic_box {
    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      .price {
        flex: 1;
        font-size: 24px;
        font-weight: 700;
        padding: 10px 10px 10px 0;
      }
      .right {
        flex: 2;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        .history_price {
          text-decoration: line-through;
          color: gray;
        }
        .youhui {
          color: #ff2255;
        }
      }
    }
    .good_name {
      font-size: 16px;
    }
    .youfei {
      color: gray;
      font-size: 12px;
    }
  }
}
</style>