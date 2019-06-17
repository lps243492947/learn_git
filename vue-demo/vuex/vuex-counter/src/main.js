import Vue from 'vue'; //实现mvvm
import App from './App.vue'; // 根组件
import store from './store'; // 统一管理应用状态
// SPA
new Vue ({
  el: '#app',
  store,
  render: h => h(App)
})
