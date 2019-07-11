<template>
  <div class="header">
    <div class="navbar_left" v-on:click="backTo">
      <img src="./zuo.png" alt="">
    </div>
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
    <div class="search" slot="action" @click="onSearch">搜索</div>
</van-search>
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  name: 'ShopHeader',
  methods:{
    backTo(){
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
  background-color: #fff;
}
.navbar_left img {
  width: 25px;
  height: 25px;
  margin-left: 3vw;
  margin-top: 10px;
}
.van-search {
  width: 100%;
}
/* .search {
  margin-left: 15vw;
} */
</style>