<template>
  <van-submit-bar
  :loading="setloading"
  :price="totalPrice"
  button-text="提交订单"
  @submit="onSubmit"
/>
</template>

<script>
import { SubmitBar } from 'vant';
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
      setloading: false
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count * 100
      })
      return total
    },
  },
  methods: {
    onSubmit() {
      this.setloading = true
    }
  },
}
</script>

<style>

</style>
