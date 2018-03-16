import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import('../pages/Msite/Msite.vue')

const Classify = () => import('../pages/Classify/Classify.vue')
const Types = () => import('../pages/Classify/Types/Types.vue')
const Brands = () => import('../pages/Classify/Brands/Brands.vue')

const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const MyEpet = () => import('../pages/MyEpet/MyEpet.vue')

Vue.use(VueRouter)

//向外暴露VueRouter对象
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: 'types',
          component:Types,
          meta: {
            showFooter: true
          },
        },
        {
          path: 'brands',
          component:Brands,
          meta: {
            showFooter: true
          },
        },
        {
          path: '',
          redirect: '/classify/types'
        }
      ]
    },
    {
      path: '/shopcart',
      component: ShopCart,
    },
    {
      path: '/myepet',
      component: MyEpet,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    }

  ]
})
