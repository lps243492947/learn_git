<template>
  <div class="container">
    <div class="header">
      <div class="top">
        <div class="personal">
          <router-link to="/shop">
            <div class="avatar">
              <img src="./weidenglu.png" alt="icon">
            </div>
          </router-link>
          <div class="city">
          <el-dropdown>
            <span class="el-dropdown-link">
              南昌<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上饶</el-dropdown-item>
            <el-dropdown-item>万年</el-dropdown-item>
            <el-dropdown-item>永丰</el-dropdown-item>
            <el-dropdown-item>吉安</el-dropdown-item>
            <el-dropdown-item divided>南昌</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
            <p>新建首创 约1.66公里</p>
          </div>
        </div>
      <div class="functions">
          <div class="sign">
            <img src="./sign.png" alt="">
            <span class="add">+</span>
          </div>
          <div class="message">
            <img src="./message.png" alt="">
            <span class="spot"></span>
          </div>
          <div class="more">
            <img src="./more.png" alt="">
          </div>
      </div>
      </div>
      <div class="gold">
        <div class="my_gold">
          我的<img src="./v.png" alt="">金
          <div class="u">
            <u>1359</u>
          </div>
        </div>
        <div class="wallet">
          <div class="code tp">
            <img src="./huiyuanma.png" alt="">
            <p>会员码</p>
          </div>
          <div class="kabaw tp">
            <img src="./kabao.png" alt="">
            <p>卡包</p>
          </div>
          <div class="coupon tp">
            <img src="./youhuiquan.png" alt="">
            <p>优惠券</p>
          </div>
          <div class="god tp">
            <img src="./shenqianbao.png" alt="">
            <p>神钱包</p>
          </div>
        </div>
      </div>
    </div>
    <div class="abdomen">
      <div class="delivery">
        <div class="send">
          <router-link to="">
            <img src="./waisongdiancan.png" alt="">
          </router-link>
        </div>
        <div class="self">
          <router-link to="">
            <img src="./zizhudiancan.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="foot">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  border-bottom-right-radius: 50% 10px;
  border-bottom-left-radius: 50% 10px;
}
.top {
  position: relative;
}
.personal {
  display: flex;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d6d6d6;
  border: 1px solid #d6d6d6;
  margin: 40px 15px 25px 26px;
  overflow: hidden;
  position: relative;
}
.avatar img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  font-size: 16px;
  font-weight: 600;
}
.el-icon-arrow-down {
  font-size: 15px;
}
.city {
  margin-top: 38px;
}
.city p {
  font-size: 12px;
  color: #666666;
  line-height: 0;
}
.functions {
  display: flex;
  position: absolute;
  top: 40px;
  right: 0;
}
.sign img {
  width: 22px;
  height: 22px;
  margin-right: 20px;
}
.add {
  display: inline-block;
  padding: .15em .2em;
  min-width: 8px;
  border-radius: 50%;
  color: #FA5151;
  background-color: #FFFFFF;
  line-height: .9;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
  box-shadow: 0 0 5px #e3e3e3;
  position: absolute;
  top: -4px;
  right: 85px;
}
.message img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
.spot {
  display: inline-block;
  padding: .2em;
  min-width: 0;
  border-radius: 50%;
  background-color: #FA5151;
  position: absolute;
  top: 1px;
  right: 48px;
}
.more img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.my_gold {
  display: block;
  font-size: 14px;
  color: #696969;
  padding: 0 25px 35px 50px;
}
.my_gold img {
  width: 15px;
  height: 15px;
}
.u {
  margin-top: 15px;
}
.my_gold u {
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 800;
}
.wallet {
  display: flex;
  text-align: center;
  position: absolute;
  top: 100px;
  right: 0;
}
.tp {
  margin-right: 13px;
}
.tp img {
  width: 50px;
  height: 50px;
}
.tp p {
  color: #c51c35;
  line-height: 0;
}
.delivery {
  display: flex;
  margin-top: 18px;
}
.delivery img {
  width: 160px;
}
.send {
  flex: 1;
  margin-left: 5vw;
}
.self {
  flex: 1;
}
</style>
