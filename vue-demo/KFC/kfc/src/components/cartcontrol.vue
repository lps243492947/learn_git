<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
        <div class="inner">
          <img width="15px" height="15px" src="../../images/jian.png" alt="">
        </div>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <img width="15px" height="15px" src="../../images/add.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
 name: "cartcontrol",
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {
    addCart (event) {
      console.log(event)
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        this.$set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('add', event.target)
    },
    decreaseCart (event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  },
}
</script>

<style scoped>
.cartcontrol {
font-size: 0;
}
.cart-decrease {
  display: inline-block;
  padding: 6px;
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.inner {
  display: inline-block;
  line-height: 24px;
  font-size: 24px;
  transition: all 0.4s linear;
  transform: rotate(0);
}
.move-enter-active, .move-leave-active {
  transition: all 0.4s linear;
}
.move-enter, .move-leave-active {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
}
.cart-count {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  padding-top: 8px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  color: #db3036;
}
.cart-add {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
}
</style>
