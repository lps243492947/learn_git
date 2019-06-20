import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import F1 from '@/components/view/demo1/father'
import F2 from '@/components/view/demo2/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/f1',
      name: 'F1',
      component: F1
    },
    {
      path: '/f2',
      name: 'F2',
      component: F2
    }
  ]
})
