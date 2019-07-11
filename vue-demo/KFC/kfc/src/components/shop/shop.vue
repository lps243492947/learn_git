<template>
  <div class="container">
    <shop-header></shop-header>
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
    </div>
  </div>
</template>

<script>
import ShopHeader from './header';
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import BScroll from "better-scroll";
export default {
  name: 'Shop',
  components: {
    ShopHeader
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
  box-shadow: 0px 2px 5px #979696;
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
</style>
