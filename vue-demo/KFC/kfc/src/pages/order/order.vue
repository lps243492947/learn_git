<template>
  <div class="container">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="activeName" animated title-active-color=#d62f35>
      <van-tab title="外送" name="a">
        <out-ward>
          <div class="text">
            <div class="txt">
              <p>此处空空如也</p>
              <p>还没有发现任何订单呢~</p>
            </div>
          </div>
        </out-ward>
      </van-tab>
      <van-tab title="自助点餐" name="b">
        <self-help>
          <div class="text">
            <div class="txt">
              <p>此处空空如也</p>
              <p>还没有发现任何订单呢~</p>
            </div>
          </div>
        </self-help>
      </van-tab>
      <van-tab title="V金商城" name="c">
        <order-vgold>
          <div slot="Vgold" class="text">
            <div class="txt">
              <p>此处空空如也</p>
              <p>还没有发现任何订单呢~</p>
            </div>
          </div>
          <div slot="Xgold" class="text">
            <div class="txt">
              <p>此处空空如也</p>
              <p>还没有发现任何订单呢~</p>
            </div>
          </div>
        </order-vgold>
      </van-tab>
      <van-tab title="其他" name="d">
        <other>
          <div class="text">
            <div class="txt">
              <p>此处空空如也</p>
              <p>还没有发现任何订单呢~</p>
            </div>
          </div>
        </other>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OutWard from '../../components/tabs/Outward';
import SelfHelp from '../../components/tabs/Selfhelp';
import OrderVgold from '../../components/tabs/Vgold';
import Other from '../../components/tabs/Other';
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
