<template>
  <div class="container">
    <mine-header></mine-header>
    <v-scroll class="key">
      <div class="bscroll-container">
        <div class="medal">
          <div class="title">WOW勋章</div>
          <div class="brand">
            <div class="brand_img">
              <img src="./brand.png" alt />
            </div>
            <div class="see">
              查看
              <img src="./you.png" alt />
            </div>
          </div>
        </div>
        <div class="various">
          <div class="various_container">
            <div class="various_img">
              <img src="./dizhi.png" alt />
              <p>配送地址</p>
            </div>
            <div class="jiantou">
              <img src="./you.png" alt />
            </div>
          </div>
          <router-link style="color: #000" to="/coupon">
            <div class="various_container">
              <div class="various_img">
                <img src="./youhuiquan.png" alt />
                <p>优惠券</p>
              </div>
              <div class="jiantou">
                <span>每月更新，立享优惠</span>
                <img src="./you.png" alt />
              </div>
            </div>
          </router-link>
          <div class="various_container">
            <div class="various_img">
              <img src="./liwu.png" alt />
              <p>签到有礼</p>
            </div>
            <div class="jiantou">
              <span>好礼天天领</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./lipinka.png" alt />
              <p>礼品卡</p>
            </div>
            <div class="jiantou">
              <span>充200送88元券</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./fenxiang.png" alt />
              <p>分享有礼</p>
            </div>
            <div class="jiantou">
              <span>送好友新人礼得免费圣代券</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./xin.png" alt />
              <p>肯德基公益</p>
            </div>
            <div class="jiantou">
              <span>爱的肯定</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./kefu.png" alt />
              <p>在线客服</p>
            </div>
            <div class="jiantou">
              <span>欢迎光临，竭诚为您服务</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./women.png" alt />
              <p>加入我们</p>
            </div>
            <div class="jiantou">
              <span>为梦想而生，为颠覆而来</span>
              <img src="./you.png" alt />
            </div>
          </div>
        </div>
        <div class="set">
          <div class="various_container">
            <div class="various_img">
              <img src="./kefu.png" alt />
              <p>在线客服</p>
            </div>
            <div class="jiantou">
              <span>欢迎光临，竭诚为您服务</span>
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./shezhi.png" alt />
              <p>设置</p>
            </div>
            <div class="jiantou">
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./bangzhu.png" alt />
              <p>帮助</p>
            </div>
            <div class="jiantou">
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./yinsi.png" alt />
              <p>隐私政策</p>
            </div>
            <div class="jiantou">
              <img src="./you.png" alt />
            </div>
          </div>
          <div class="various_container">
            <div class="various_img">
              <img src="./jianyi.png" alt />
              <p>建议</p>
            </div>
            <div class="jiantou">
              <img src="./you.png" alt />
            </div>
          </div>
        </div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
import MineHeader from "../../components/mineHeader";
import scroll from '../../components/scroll';
export default {
  name: "Mine",
  components: {
    MineHeader,
    'v-scroll': scroll
  },
};
</script>

<style scoped>
.key {
  width: 100%;
  height: 58vh;
  overflow: hidden;
}
.medal {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
  box-shadow:0px 5px 10px #d6d6d6;
}
.title {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5vw;
  padding: 15px 0 5px 0;
}
.brand {
  display: flex;
}
.brand_img {
  flex: 1;
}
.brand_img img {
  width: 100px;
  height: 50px;
  margin-left: 2vw;
}
.see {
  font-size: 14px;
  color: #bfbfbf;
}
.see img {
  position: relative;
  top: 14px;
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
  width: 20px;
  height: 20px;
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
.set {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
}
</style>
