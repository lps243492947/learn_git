<template>
    <van-tabs v-model="activeName" animated title-active-color=#d62f35>
      <van-tab title="纯V金商品" name="a">
          <slot name="Vgold"></slot>
      </van-tab>
      <van-tab title="现金商品" name="b">
          <slot name="Xgold"></slot>
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

</style>
