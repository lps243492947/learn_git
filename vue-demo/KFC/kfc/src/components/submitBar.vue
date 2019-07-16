<template>
<div class="submitBar">
  <van-submit-bar
  :loading="setloading"
  :price="totalPrice"
  button-text="提交订单"
  @submit="onSubmit"
>
  <div class="shoppingCart" @click="toggleList">
    <img src="../../images/gwc.png" alt="">
    <span v-if="selectFoods.length > 0">{{selectFoods.length}}</span>
  </div>
</van-submit-bar>
 <transition name="fold">
    <div class="shopcart-list" v-show="listShow">
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty" @click="empty">清空</span>
      </div>
      <div class="list-content" ref="listContent">
        <ul>
          <li class="food" v-for="(food, index) in selectFoods" :key="index">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price*food.count}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <cartcontrol @add="addFood" :food="food"></cartcontrol>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
  </transition>
</div>

</template>

<script>
import { SubmitBar } from 'vant';
import BScroll from 'better-scroll';
import cartcontrol from './cartcontrol';
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ]
      }
    },
  },
  data() {
    return {
      setloading: false,
      fold: true
    }
  },
  computed: {
    totalCount () {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count * 100
      })
      return total
    },
    listShow () {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
      return show
    }
  },
  methods: {
    toggleList(){
      console.log(this.totalCount)
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    onSubmit() {
      this.setloading = true
    },
    empty() {
      this.selectFoods.forEach((food) => {
        food.count = 0;
      });
    },
    hideList() {
      this.fold = true;
    },
    addFood() {}
  },
  components: {
    cartcontrol
  }
}
</script>

<style scoped>
.shoppingCart {
  margin: 10px;
}
.shoppingCart span {
  width: 15px;
  height: 15px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  line-height: 15px;
  border-radius: 50%;
  background-color: #db3036;
  position: absolute;
  left: 11vw;
  bottom: 30px;
}
.shoppingCart img {
  width: 40px;
  height: 40px;
}
.shopcart-list {
  position: absolute;
  top: 94vh;
  left: 0;
  z-index: 50;
  width: 100%;
  transform: translate3d(0, -100%, 0);
}
.fold-enter-active, .fold-leave-active {
  transition: all .7s;
}
.fold-enter, .fold-leave-active {
  transform: translate3d(0, 0, 0);
}
.list-header {
  height: 40px;
  padding: 0 18px;
  background: #db3036;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.title {
  float: left;
  font-size: 15px;
  color: rgb(7, 17, 27);
}
.empty {
  float: right;
  line-height: 37px;
  font-size: 12px;
  color: #fff;
}
.list-content {
  width: 100%;
  max-height: 217px;
  overflow: hidden;
  background: #fff;
}
.food {
  position: relative;
  padding: 12px 0;
  box-sizing: border-box;
  border: 1px solid rgba(7, 17, 27, 0.1);
}
.name {
  line-height: 24px;
  font-size: 14px;
  margin-left: 15px;
  color: rgb(7, 17, 27);
}
.price {
  position: absolute;
  right: 90px;
  bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(240, 20, 20);
}
.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 6px;
}
.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  background: rgba(7, 17, 27, 0);
}
</style>
