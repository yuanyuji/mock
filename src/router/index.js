import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: 'hello',
          component: () => import('@/components/hello/hello.vue')
        }
      ]
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('@/views/sort.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search.vue')
    },
    {
      path: '/shopcar/:image/:name/:price',
      name: 'shopCar',
      component: () => import('@/views/shopCar.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    }
  ]
})
