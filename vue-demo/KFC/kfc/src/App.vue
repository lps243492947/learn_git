<template>
    <div id="app">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/" exact>
        <div style="margin-top: 5px">
          <i class="icon iconfont icon-k"></i>
        </div>
        <div>首页</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop">
        <div style="margin-top: 5px">
          <i class="icon iconfont icon-shangcheng"></i>
        </div>
        <div>商城</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/order">
         <div style="margin-top: 5px">
          <i class="icon iconfont icon-icon-"></i>
        </div>
        <div>订单</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mine">
        <div style="margin-top: 5px">
          <i class="icon iconfont icon-wo"></i>
        </div>
        <div>我的</div>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-code></v-code>
  </div>
</template>

<script>
import code from './components/code';
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    'v-code': code
  }
}
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    overflow: hidden;
  }
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    width: 100%;
    display: flex;
    z-index: 999;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-item a {
    display: block;
    font-size: 14px;
    text-decoration: none;
    color: rgb(77, 85, 93);
  }
  .icon {
    font-size: 30px;
  }
  .tab-item .router-link-active {
    color: rgb(240, 20, 20);
  }
</style>
