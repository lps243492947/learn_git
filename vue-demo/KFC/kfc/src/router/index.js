import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Mine from '@/pages/mine/mine'
import Order from '@/pages/order/order'
import Shop from '@/pages/shop/shop'
import Coupon from '@/components/coupon'
import Wallet from '@/components/wallet'

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
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    }
  ]
})
