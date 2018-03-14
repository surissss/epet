import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import('../pages/Msite/Msite.vue')
//const Classify = () => import('../pages/Classify/Classify.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const MyEpet = () => import('../pages/MyEpet/MyEpet.vue')

import Classify from '../pages/Classify/Classify.vue'

Vue.use(VueRouter)

//向外暴露VueRouter对象
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/myepet',
      component: MyEpet
    },
    {
      path: '/',
      redirect: '/msite'
    }

  ]
})
