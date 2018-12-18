import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login.vue'
import Root from './views/Root.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/root',
      name: 'root',
      component: Root,
      children: [
        {
          path: '/root',
          name: 'home',
          component: () => import('./views/home/Home.vue')
        },
        {
          path: '/staff',
          name: 'staff',
          component: () => import('./views/staff/Staff.vue')
        },
        {
          path: '/address',
          name: 'address',
          component: () => import('./views/address/address.vue')
        },
        {
          path: '/device',
          name: 'device',
          component: () => import('./views/device/Device.vue')
        },
        {
          path: '/feature',
          name: 'feature',
          component: () => import('./views/feature/Feature.vue')
        },
        {
          path: '/system',
          name: 'system',
          component: () => import('./views/system/System.vue')
        }
      ]
    }
  ]
})
