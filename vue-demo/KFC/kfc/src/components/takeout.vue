<template>
  <div class="takeout">
    <div class="goods">
      <div class="header">
        <div class="navbar_left" @click="backTo">
          <img src="../pages/shop/zuo.png" alt="">
        </div>
        <div class="appointment">
          <div class="btn">
            <div class="yy">预约</div>
            <div class="Kcoffee">K咖啡</div>
          </div>
          <div class="bag">
            <router-link to="/coupon">
              <div class="bagtext">
                卡包<p>3</p>张
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'takeout',
  data() {
    return {
      
    }
  },
  methods: {
    backTo () {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
.takeout {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.header {
  position: relative;
}
.navbar_left img {
  width: 25px;
  height: 25px;
  margin-left: 3vw;
  margin-top: 10px;
}
.appointment {
  display: flex;
}
.btn {
  display: flex;
  text-align: center;
  line-height: 25px;
}
.yy {
  width: 65px;
  height: 30px;
  border: 1px solid rgba(120, 120, 120, .5);
  border-radius: 6px;
  margin: 20px 15px 20px 20px;
}
.Kcoffee {
  width: 65px;
  height: 30px;
  border: 1px solid rgba(120, 120, 120, .5);
  border-radius: 6px;
  margin-top: 20px;
}
.bag {
  width: 100px;
  height: 40px;
  box-shadow: 0 0 12px rgba(176, 177, 177, 0.5);
  border-radius: 40px;
  position: absolute;
  top: 55px;
  right: -20px;
}
.bagtext {
  display: flex;
  margin-left: 13px;
  line-height: 37px;
}
.bagtext p {
  color: #db3036;
  margin-top: 1px;
}
</style>
