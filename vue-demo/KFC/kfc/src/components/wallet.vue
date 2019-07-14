<template>
  <div class="wallet">
    <div class="header">
      <div class="header_bar">
        <div class="headerbar_img">
          <img @click="backto" src="../pages/mine/zuo.png" alt="">
        </div>
        <div class="header_title">神钱包</div>
        <p>活动细则</p>
      </div>
      <div class="payment_method">
        <div class="payment" @click="showCode">
          <div class="payment_img">
            <img src="../../images/wallet_fkm.png" alt="">
          </div>
          <p>付款码</p>
        </div>
        <div class="payment">
          <div class="payment_img">
            <img src="../../images/wallet_ye.png" alt="">
          </div>
          <div class="zh">
            <p>账户余额</p>
            <p>￥0</p>
          </div>
        </div>
        <div class="payment">
          <div class="payment_img">
            <img src="../../images/wallet_yhk.png" alt="">
          </div>
          <p>银行卡</p>
        </div>
      </div>
    </div>
    <div class="abomen">
      <div class="abomen_title">
        <img src="../../images/wallet_cz.png" alt="">
        <p>充值</p>
        <div class="laws"><p>查看优惠细则</p></div>
      </div>
    </div>
    <div class="footer">
      <div class="various_container">
        <div class="various_img">
          <img src="../../images/wallet_sz.png" alt />
          <p>收支明细</p>
        </div>
        <div class="jiantou">
          <img src="../pages/mine/you.png" alt />
        </div>
      </div>
      <div class="various_container">
        <div class="various_img">
          <img src="../../images/wallet_lpk.png" alt />
          <p>购买礼品卡</p>
        </div>
        <div class="jiantou">
          <span>为朋友送上一点心意</span>
          <img src="../pages/mine/you.png" alt />
        </div>
      </div>
      <div class="various_container">
        <div class="various_img">
          <img src="../../images/wallet_bd.png" alt />
          <p>礼品卡绑定</p>
        </div>
        <div class="jiantou">
          <span>绑定实体卡有惊喜哦</span>
          <img src="../pages/mine/you.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wallet',
  data() {
    return {
      
    }
  },
  methods: {
    backto () {
      this.$router.go(-1)
    },
    showCode () {
      this.$store.dispatch('setShowCode', true)
    }
  },
}
</script>

<style scoped>
.wallet {
  width: 100%;
  height: 100vh;
  background-color: #ebebeb;
}
.header {
  background-color: #d62f35;
}
.header_bar {
  display: flex;
  color: #fff;
  position: relative;
}
.header_bar p {
  font-size: 14px;
  margin-right: 10px;
}
.headerbar_img {
  flex: 1;
}
.headerbar_img img {
  width: 30px;
  height: 30px;
  margin: 10px 0 0 10px;
}
.header_title {
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%);
}
.payment_method {
  display: flex;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 30px
}
.payment {
  flex: 1;
}
.payment p {
  font-size: 14px;
  line-height: 0;
  color: #fff;
}
.payment_img img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
.abomen {
  background-color: #fff;
  position: relative;
}
.abomen_title {
  display: flex;
  line-height: 35px;
}
.abomen_title img {
  width: 30px;
  height: 25px;
  margin: 20px 10px 20px 20px;
}
.laws {
  border: 1px solid #d62f35;
  border-radius: 40px;
  position: absolute;
  top: 22px;
  left: 29vw;
}
.laws p {
  font-size: 12px;
  color: #d62f35;
  line-height: 1;
  margin: 5px;
}
.footer {
  background-color: #fff;
  margin-top: 15px;
}
.various {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
}
.various_container {
  display: flex;
  width: 95%;
  margin-left: 6vw;
  border-bottom: 1px solid #e6e6e6;
}
.various_img {
  display: flex;
  font-size: 16px;
  margin: 5px 0 5px 0;
  flex: 1;
}
.various_img img {
  width: 30px;
  height: 25px;
  position: relative;
  top: 17px;
  margin-right: 10px;
}
.jiantou {
  font-size: 14px;
  color: #bfbfbf;
}
.jiantou span {
  position: relative;
  left: 4vw;
  bottom: 12px;
}
.jiantou img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 7px;
}
</style>
