<template>
  <div class="container">
    <shop-header></shop-header>
    <v-scroll class="bscroll">
      <div class="bscroll-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../images/shop/lb1.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../images/shop/lb2.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../images/shop/lb3.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../images/shop/lb4.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../../images/shop/lb5.png" alt />
          </div>
        </div>
      </div>
      <div class="myVgold">
        <div class="my">我的V金</div>
        <div class="goldnum">
          <h3>1359</h3>
          <img src="./V.png" alt="">
          <img style="margin-left: 10px" src="./you.png" alt="">
        </div>
      </div>
      <div class="entry">
        <div class="list" v-for="(item,index) in entry" :key="index">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="shop">
        <div class="exhibition" v-for="(item,index) in exhibition" :key="index">
          <div class="title">
            <img src="../../../images/shop/zs1.png" alt="">
            <p>{{item[0].name}}</p>
             <img src="../../../images/shop/zs2.png" alt="">
          </div>
          <div class="exhibition_img">
            <div class="exhibition_title">
              <img :src="item[0].url" alt="">
            </div>
            <div ref="listwrapper" class="index">
              <div class="exhibition_list">
                <div class="exhibition_box" v-for="(u,i) in item.slice(1)" :key="i">
                  <img :src="u.url" alt=""> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-scroll>
  </div>
</template>

<script>
import ShopHeader from '../../components/shopHeader';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import scroll from '../../components/scroll';
export default {
  name: 'Shop',
  data() {
    return {
      data: [],
      entry: [],
      exhibition: []
    }
  },
  components: {
    ShopHeader,
    'v-scroll': scroll
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca49494ea0dc52bf3b67f4e/example/entry')
      .then(res => {
        this.entry = res.data.data.entry
    })
    this.$http.get('https://www.easy-mock.com/mock/5ca49494ea0dc52bf3b67f4e/example/exhibition')
      .then(res => {
        this.exhibition = res.data.data.exhibition
    })
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      speed: 1000,
      loop: true,
    });
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.bscroll {
  width: 100%;
  height: 87vh;
  overflow: hidden;
}
.swiper-wrapper {
  margin-top: 15px;
  margin-left: 5vw;
}
.swiper-slide img {
  width: 90%;
  height: 125px;
}
.myVgold {
  display: flex;
  width: 90%;
  align-items: center;
  margin: 15px 0 15px 5vw;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 6px 12px -4px rgba(114, 116, 116, 0.8);
}
.my {
  margin-left: 20px;
  font-size: 18px;
  color: #db3036;
  font-weight: 800;
  flex: 1;
}
.goldnum {
  display: flex;
  line-height: 0;
}
.goldnum h3 {
  font-size: 25px;
  color: #db3036;
}
.goldnum img {
  width: 20px;
  height: 20px;
  transform: translateY(75%);
  margin-left: 5px;
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
  font-weight: 600;
}
.title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.title img {
  width: 100px;
  height: 30px;
  transform: translateY(15%)
}
.title p {
  white-space:nowrap;
  line-height: 0;
  font-size: 18px;
  color: #db3036;
  font-weight: 800;
  margin-left: 10px;
  margin-right: 10px;
}
.exhibition_img {
  padding-top: 50px;
  padding-bottom: 15px;
  background-color: #fff;
  margin-top: 10px;
}
.exhibition_title {
  text-align: center;
}
.exhibition_title img{
  width: 90vw;
  height: 15vh;
}
.exhibition_list {
  display: flex;
  margin-top: 10px;
}
.exhibition_list :first-child {
  margin-left: 2.5vw;
}
.exhibition_list img {
  width: 29vw;
  height: 15vh;
}
.exhibition_box {
  white-space: nowrap;
}
</style>
