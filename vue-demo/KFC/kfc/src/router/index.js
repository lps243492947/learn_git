import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
