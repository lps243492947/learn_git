<template>
  <div class="container">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="activeName" animated title-active-color=#d62f35>
      <van-tab title="外送" name="a"><out-ward></out-ward></van-tab>
      <van-tab title="自助点餐" name="b"><self-help></self-help></van-tab>
      <van-tab title="V金商城" name="c"><order-vgold></order-vgold></van-tab>
      <van-tab title="其他" name="d"><other></other></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OutWard from './tabs/Outward';
import SelfHelp from './tabs/Selfhelp';
import OrderVgold from './tabs/Vgold';
import Other from './tabs/Other';
import { NavBar, Tab, Tabs } from 'vant';
export default {
  name: 'Order',
  components: {
    OutWard,
    SelfHelp,
    OrderVgold,
    Other
  },
  data() {
    return {
      activeName: 'a',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #db3036;
}
.van-nav-bar__arrow {
  font-size: 25px;
}
.van-nav-bar__title {
  font-size: 18px;
  font-weight: 600;
  color: #db3036;
}
</style>
