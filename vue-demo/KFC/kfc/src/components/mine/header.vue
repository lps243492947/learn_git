<template>
  <div class="header">
    <div class="navbar_left" v-on:click="backTo">
      <img src="./zuo.png" alt="">
    </div>
    <div class="card">
      <div class="card_header">
        <div class="card_headerimg">
          <img src="./kfcwowvip.png" alt="">
        </div>
        <div class="opening">
          <p>90天最高劲省3265元</p>
          <div class="btn">
            <img src="./lock.png" alt="">
            立即开通 >
          </div>
        </div>
      </div>
      <div class="card_page">
        <div class="avatar">
          <div class="avatar_img">
            <img src="./avatar.png" alt="">
          </div>
          <div>
            肯德基会员
          </div>
        </div>
        <div class="account">
          <div class="VGold">
            <p>我的V金</p>
            <div class="num">
              <h3>1,359</h3>
              <img src="./V.png" alt="">
            </div>
          </div>
          <div class="VGold">
            <p>我的卡包</p>
            <div class="num">
              <h3>4</h3>
            </div>
          </div>
          <div class="VGold">
            <p>神钱包</p>
            <div class="num">
              <h3>0.00元</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'MineHeader',
  methods:{
    backTo(){
      this.$router.go(-1);
    },
},
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #da3a35;
}
.navbar_left img {
  width: 25px;
  height: 25px;
  margin-left: 3vw;
  margin-top: 10px;
}
.card {
  padding: 10px 0 15px 0;
}
.card_header {
  width: 90%;
  display: flex;
  background-color: #242014;
  margin-left: 5vw;
  border-radius: 5px;
}
.card_headerimg {
  flex: 1;
}
.card_headerimg img{
  width: 130px;
  height: 60px;
}
.opening {
  margin-right: 10px;
  margin-bottom: 10px;
}
.opening p {
  font-size: 12px;
  font-weight: normal;
  color: #eed6b0;
}
.btn {
  width: 90px;
  display: flex;
  font-size: 12px;
  font-weight: 550;
  line-height: 25px;
  background-color: #d6a94f;
  border-radius: 15px;
  float: right;
}
.btn img {
  width: 15px;
  height: 15px;
  margin:5px 5px 5px 5px;
}
.card_page {
  width: 90%;
  background-color: #fff;
  margin-left: 5vw;
  border-radius: 5px;
}
.avatar {
  text-align: center;
  color: #515151;
  font-weight: 550;
  padding-top: 30px;
}
.avatar_img {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 11vh;
  left: 50%;
  transform: translate(-50%);
}
.avatar_img img {
  margin-top: 12px;
}
.account {
  display: flex;
  text-align: center;
  position: relative;
}
.VGold {
  flex: 1;
}
.VGold p {
  font-size: 14px;
  color: #808080;
}
.num img {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 7vh;
  left: 23vw;
}
</style>
