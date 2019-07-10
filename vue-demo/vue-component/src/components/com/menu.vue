<template>
  <div class="menu">{{message}}</div>
</template>

<script>
// 千万记得引入哩！！！
import bus from '@/common/bus'
export default {
  data() {
    return {
      message: "那小子真帅"
    };
  },
  // 在生命周期中接收另一个组件中的数据
  created() {
    //   val是todo带过来的信息
    bus.$on('todo', (val) => {
        this.message = val
    });
  }
};
</script>

<style>
</style>
