<template>
  <div class="takeout" :class="{showtakeout: showTakeout}">
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
            <router-link style="color: #000" to="/coupon">
              <div class="bagtext">
                卡包<p>3</p>张
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="goodList">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li
              v-for="(item,index) in goods"
              :key="index"
              class="menu-item"
              :class="{'current':currentIndex===index}"
              @click="selectMenu(index,$event)"
            >
              <span class="text border-1px">
                {{item.name}}
              </span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
            <li v-for="(item,index) in goods" :key="index" class="food-list" ref="foodList">
              <h1 class="title">{{item.name}}</h1>
              <ul>
                <li
                  v-for="(food,index) in item.foods"
                  :key="index"
                  class="food-item border-1px"
                  @click="selectFood(index, $event)"
                >
                  <div class="icon">
                    <img :src="food.image">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <cartcontrol @add="addFood" :food="food"></cartcontrol>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <submit-bar ref="shopcart" :selectFoods="selectFoods"></submit-bar>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cartcontrol from './cartcontrol'
import submitBar from './submitBar'
import { mapGetters } from 'vuex'
export default {
  name: 'takeout',
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    cartcontrol,
    submitBar
  },
  computed: {
    ...mapGetters([
      'showTakeout'
    ]),
    currentIndex () {
      for(let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i - 1]
        let height2 = this.listHeight[i]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    backTo () {
      this.$store.dispatch('setShowTakeout', false)
    },
     selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodList;
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    selectFood(food, event) {
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
    },
    addFood(target) {
    },
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca49494ea0dc52bf3b67f4e/example/takeout')
      .then(res => {
        if (res.data.errno === 0) {
          this.goods = res.data.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
  }
}
</script>

<style scoped>
.takeout {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  top: -800px;
  left: 0;
  transform: translateZ(0);
  opacity: 0;
  z-index: 1002;
  overflow: auto;
  transition: all 0.3s ease;
}
.showtakeout {
  transform: translateY(800px);
  opacity: 1;
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
  border-bottom: 1px solid #e0e0e0;
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
.goodList {
  width: 100%;
  display: flex;
  position: absolute;
  top: 113px;
  bottom: 46px;
  overflow: hidden;
}
.menu-wrapper {
  width: 80px;
  flex: 0 0 80px;
  white-space: nowrap;
  background: #f3f5f7;
  text-align: center;
}
.menu-item {
  display: table;
  height: 54px;
  width: 56px;
  padding: 0 12px;
  line-height: 14px;
}
.current {
  position: relative;
  z-index: 10;
  margin-top: -1px;
  background: #ffffff;
  font-weight: 700;
}
.text {
  border: none;
  display: table-cell;
  width: 56px;
  vertical-align: middle;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  font-size: 12px;
}
.foods-wrapper {
  flex: 1;
}
.title {
  padding-left: 135px;
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  font-weight: normal;
  color: rgb(147, 153, 159);
}
.icon img {
  width: 150px;
  height: 90px;
  transform: translateY(20%)
}
.food-item {
  position: relative;
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
  box-shadow: 0 3px 12px rgba(92, 92, 92, 0.1);
}
.food-item:first-child {
  border: none;
  margin-bottom: 0;
}
.content {
  flex: 1;
}
.name {
  float: right;
  text-overflow:ellipsis;
  margin: 15px 5px 10px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
.price {
  font-weight: 700;
  position: absolute;
  top: 45px;
  right: 0;
}
.now {
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}
.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 8px;
}
</style>
