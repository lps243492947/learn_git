import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Mine from '@/components/mine/mine'
import Order from '@/components/order/order'
import Shop from '@/components/shop/shop'

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
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
