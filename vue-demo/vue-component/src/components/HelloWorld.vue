<template>
<!-- bus！！实现兄弟组建的通信哩 不使用vuex 不适用子传父 父传另一个子 -->
  <div class="hello">
    <!-- <button @click="submit">登录</button> -->
    <i-button size="large">登登登登录</i-button>
    <!-- 动态绑定 :size要在data中定义  写死size不需要定义-->
    <i-menu></i-menu>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    'i-button':button,
    'i-menu':menu
  },
  methods: {
    submit() {
      this.$toast('登录成功','top')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
