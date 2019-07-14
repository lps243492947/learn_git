<template>
  <div class="coupon">
    <van-nav-bar title="优惠券" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="gap"></div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
    </van-popup>
  </div>

</template>

<script>
import { NavBar, CouponCell, CouponList } from 'vant';
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '100',
  unitDesc: '元'
};
const coupontwo = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '8.8',
  unitDesc: '折'
};
const couponthree = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '200',
  unitDesc: '元'
};

export default {
   data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon, coupontwo, couponthree],
      disabledCoupons: [coupon, coupontwo, couponthree]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.gap {
  width: 100%;
  height: 15px;
}
</style>
