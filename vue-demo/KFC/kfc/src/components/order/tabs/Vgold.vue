<template>
    <van-tabs v-model="activeName" animated title-active-color=#d62f35>
      <van-tab title="纯V金商品" name="a">
        <div class="text">
          <div class="txt">
            <p>此处空空如也</p>
            <p>还没有发现任何订单呢~</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="现金商品" name="b">
        <div class="text">
          <div class="txt">
            <p>此处空空如也</p>
            <p>还没有发现任何订单呢~</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  name: 'OrderVgold',
  data() {
    return {
      activeName: 'a',
    }
  },
}
</script>

<style scoped>
.text {
  display: flex;
  text-align: center;
}
.txt {
  color: #808080;
  font-weight: 100;
  padding-top: 40px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
