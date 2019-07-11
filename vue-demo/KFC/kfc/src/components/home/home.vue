<template>
  <div class="container" ref="bscroll">
    <div class="bscroll-container">
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
      <div class="entry">
        <div class="list" v-for="(item,index) in delivery" :key="index">
            <img :src="item.url" alt="">
            <p>{{item.name}}</p>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../images/雨神.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../../images/天天1元.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../../images/蜘蛛侠.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../../images/口袋炸鸡店送福利.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="various" v-for="(item,index) in various" :key="index">
        <div class="title">
          <div class="strip"></div>
          <p>{{item[0].name}}</p>
          <div class="strip"></div>
        </div>
        <div class="various_img">
          <div class="various_title">
            <img :src="item[0].urll" alt="">
          </div>
          <div ref="listwrapper" class="index">
              <div class="various_list">
                <div class="various_box" v-for="(u,i) in item.slice(1)" :key="i">
                  <img :src="u.url" alt=""> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import BScroll from 'better-scroll';
export default {
  name: 'home',
  props: {
    tableData: [{
      type: Object
    }]
  },
  data () {
    return {
      data: [],
      delivery: [],
      various: []
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca49494ea0dc52bf3b67f4e/example/abdomen')
      .then(res => {
          this.delivery = res.data.data.abdomen.delivery
      })
    this.$http.get('https://www.easy-mock.com/mock/5ca49494ea0dc52bf3b67f4e/example/various')
      .then(res => {
          this.various = res.data.data.abdomen
          console.log(this.various)
      })
      .then(() => {
        console.log(this.$refs.listwrapper[0])
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.listwrapper[0], {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        })
      })
    this.$nextTick(() => {
      this._initScroll();
    })
    
  },
  methods: {
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.bscroll, {
        click: true
      })
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay:true,
      speed: 1000,
      spaceBetween : 15,
      loop: true,
      slidesPerView : 1.2,
      centeredSlides : true
    })
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 93vh;
  overflow: hidden;
}
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
  text-align: center;
}
.delivery img {
  width: 160px;
}
.send {
  flex: 1;
}
.self {
  flex: 1;
}
.entry {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.list {
  min-width: 20vw;
  text-align: center;
  margin-top: 15px;
}
.list img {
  width: 60px;
  height: 60px;
}
.list p {
  line-height: 0;
}
.swiper-container img {
  width: 85vw;
  height: 15vh;
}
.foot {
  position: relative;
}
.title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.title p {
  white-space:nowrap;
  margin-left: 20px;
  margin-right: 20px;
}
.strip {
  width: 20px;
  height: 5px;
  background-color: #e8491a;
  border-radius: 5px;
  margin-top: 25px;
}
.various_img {
  padding-top: 50px;
  padding-bottom: 15px;
  background-color: #fff;
  margin-top: 10px;
}
.various_title {
  text-align: center;
}
.various_title img{
  width: 90vw;
  height: 15vh;
}
.various_list {
  display: flex;
  margin-top: 10px;
}
.various_list :first-child {
  margin-left: 9px;
}
.various_list img {
  width: 135px;
  height: 160px;
}
.various_box {
  white-space: nowrap;
}
</style>
